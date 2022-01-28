import express, { Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { users, Description } from "./data"


const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`);
    }
})


//    GET A SPECIFIC USER´S AMOUNT
app.get("/users/balance", (req:Request, res:Response) => {
   let errorCode = 404

   try{
      const cpf = req.query.cpf

      if(!cpf){
         errorCode = 422
         throw new Error("It is missing a parameter!")
      }

      for(let i = 0; i < users.length; i++){
         if(cpf === users[i].cpf){
            res.status(200).send({balance: users[i].balance})
         }
      }

   }catch(error:any){
      res.status(errorCode).send(error.message)
   }
})


//    GET ALL USERS
app.get("/users", (req:Request, res:Response) => {
   let errorCode = 404

   try{

      res.status(201).send(users)

   }catch(error:any){
      res.status(errorCode).send(error.message)
   }
})


//    ADD A BILL TO A USER´S ACCOUNT
app.post("/users/user", (req:Request, res:Response) => {
   let errorCode = 404

   try{
      const {cpf, amount} = req.body
      let date = req.body.date

      if(!date){
         date = new Date().toLocaleDateString()
      }

      for(let i = 0; i < users.length; i++){
         if(cpf === users[i].cpf){
            users[i].extract.push({date, description:Description.OTHERS, amount})
            res.status(201).send(users[i])
            
         } else{
            errorCode = 422
            throw new Error("The cpf inserted already exist!")
         }
      }

   }catch(error:any){
      res.status(errorCode).send(error.message)
   }
})


//    CREATE AN USER
app.post("/users", (req:Request, res:Response) => {
   let errorCode = 404

   try{
      const {name, cpf, dateOfBirth} = req.body
      let balance = req.body.balance
      let extract = req.body.extract
      const currentDate:Date = new Date()
      const birth:string[] = dateOfBirth.split("/")
      const newBirth:Date = new Date(Number(birth[2]), Number(birth[1])-1, Number(birth[0]))

      const age:number = Math.floor((currentDate.valueOf() - newBirth.valueOf()) / 1000 / 60 / 60 / 24 / 365)
      
      if(age < 18){
         errorCode = 404
         throw new Error("To create an account must be older than 18!")
      }

      for(let i = 0; i < users.length; i++){
         if(cpf === users[i].cpf){
            throw new Error("The cpf inserted already exist!")
         }
      }

      if(!balance ){
         balance = 0
      }

      if(!extract){
         extract = []
      }

      users.push({name, cpf, dateOfBirth, balance, extract})

      res.status(201).send(users)

   }catch(error:any){
      res.status(errorCode).send(error.message)
   }
})


//    CREATE A DEPOSIT
app.put("/users/user", (req:Request, res:Response) => {
   let errorCode = 404

   try{
      const {name, cpf, date, amount} = req.body

      for(let i = 0; i < users.length; i++){
         if(cpf === users[i].cpf && name === users[i].name){
            users[i].balance += amount
            users[i].extract.push({date, description:Description.DEPOSIT, amount})
            res.status(200).send(users[i])
         } else{
            errorCode = 422
            throw new Error("The parameters are invalid!")
         }
      }

   }catch(error:any){
      res.status(errorCode).send(error.message)
   }
})


//  UPDATE THE AMOUNT
app.put("/users/balance", (req:Request, res:Response) => {
   let errorCode = 404

   try{
      const currentDate:Date = new Date()

      for(let i = 0; i < users.length; i++){
         for(let j = 0; j < users[i].extract.length; j++){
            let newDate:string[] = users[i].extract[j].date.split("/")
            let newDate1:Date = new Date(Number(newDate[2]), Number(newDate[1])-1, Number(newDate[0]))
            if(newDate1 < currentDate){
               users[i].balance -= users[i].extract[j].amount
               res.status(200).send(users)
            }
         }
      }

   }catch(error:any){
      res.status(errorCode).send(error.message)
   }
})
