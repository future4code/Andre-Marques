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
      const cpf:string = req.query.cpf as string

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


//  TRANSFER BETWEEN ACCOUNTS
app.post("/users/transfer", (req:Request, res:Response) => {
   let errorCode = 404

   try{
      const currentDate:string = new Date().toLocaleDateString()
      const { name, cpf } = req.body
      const newName:string = req.query.name as string
      const newCpf:string = req.query.cpf as string
      const amount:number = Number(req.query.amount)
      let isCpf1Found = false
      let isCpf2found = false

      if(!name || !cpf || !newCpf || !newName || !amount){
         errorCode = 422
         throw new Error("It is missing parameters!")
      }

      for(let i = 0; i < users.length; i++){
         if(name === users[i].name && cpf === users[i].cpf){
            if(amount > users[i].balance){
               errorCode = 422
               throw new Error("The amount is higher than the balance!")
            }else{
               users[i].extract.push({date: currentDate, description:Description.TRANSFER, amount})
               isCpf1Found = true
            }
         }
      }
      
      for(let j = 0; j < users.length; j++){
         if(newName === users[j].name && newCpf === users[j].cpf){
            users[j].extract.push({date:currentDate, description:Description.RECEIVING, amount})
            isCpf2found = true
         }
      }

      if(!isCpf1Found || !isCpf2found){
         errorCode = 422
         throw new Error("The parameters are invalid!")
      }

      res.status(200).send(users)

   }catch(error:any){
      res.status(errorCode).send(error.message)
   }
})

//    ADD A BILL TO A USER´S ACCOUNT
app.post("/users/user", (req:Request, res:Response) => {
   let errorCode = 404

   try{
      const {cpf, amount} = req.body
      let date:string = req.body.date as string

      for(let i = 0; i < users.length; i++){
         if(cpf === users[i].cpf){
            if(!date){
               date = new Date().toLocaleDateString()
            }else{
               let newDate = date.split("/")
               const newDate1 = new Date(Number(newDate[2]), Number(newDate[1])-1, Number(newDate[0]))
               if(newDate1 < new Date()){
                  errorCode = 422
                  throw new Error("The date can not be less than today!")
               }
            }

            if(users[i].balance < amount){
               errorCode = 422
               throw new Error("The amount is higher than your balance!")
            }

            users[i].extract.push({date, description:Description.PAYMENTS, amount})
            res.status(201).send(users[i])
            
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
      let balance:number = Number(req.body.balance)
      let extract:[] = req.body.extract
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
      let isAccountFound = false

      for(let i = 0; i < users.length; i++){
         if(cpf === users[i].cpf && name === users[i].name){
            users[i].balance += amount
            users[i].extract.push({date, description:Description.DEPOSIT, amount})
            isAccountFound = true
            res.status(200).send(users[i])
         }
      }

      if(!isAccountFound){
         errorCode = 422
         throw new Error("The parameters are invalid!")
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
            if(newDate1 <= currentDate){
               if(users[i].extract[j].description === Description.TRANSFER || users[i].extract[j].description === Description.PAYMENTS){
                  users[i].balance -= users[i].extract[j].amount
               } else{
                  users[i].balance += users[i].extract[j].amount
               }
               res.status(200).send(users)
            }
         }
      }

   }catch(error:any){
      res.status(errorCode).send(error.message)
   }
})
