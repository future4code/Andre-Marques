import express, { Request, Response } from "express"
import cors from "cors"
import { users, UserType, User } from "./data" 

import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

// 1- a) GET
//     b) users   

app.get("/users", (req:Request, res:Response) => {
    let errorCode = 400
    try{

    if(!users){
        errorCode = 404
        throw new Error("The users were not found!")
    }

    res.status(200).send(users)

   } catch(error: any){

    res.status(errorCode). send(error.message)

   }
})

// 2- a) Query, porque o endpoint GET nao aceita body.
//    b) Sim.
// 3- a) Query
//    b) 

app.get("/users/user", (req:Request, res:Response) => {
    let errorCode = 400
    const type:UserType = req.query.type as UserType 
    const name:string = req.query.name as string 
    let isUserFound = false
    
    try{

        if(!type && !name){
            errorCode = 422
            throw new Error("It is missing a parameter")
        }

        if(type){
            if(type !== UserType.ADMIN && type !== UserType.NORMAL){
                errorCode = 422
                throw new Error("The parameter is not valid")
            }

            const machtedType:User[] = users.filter((user) => user.type === type)
            isUserFound = true
            res.status(200).send(machtedType)
        }

        if(name){
            const matchedName:User[] = users.filter((user) => user.name.toLowerCase() === name.toLowerCase())
            isUserFound = true
            res.status(200).send(matchedName)
        }

        if(!isUserFound){
            errorCode = 404
            throw new Error("The user was not found!")
        }
    
       } catch(error: any){
    
        res.status(errorCode). send(error.message)
    
       }
})

// 4- a) Nada
//    b) Sim, porém nao segue as boas praticas.

app.post("/users", (req:Request, res:Response) => {
    let errorCode = 400

    try{

        const {id, name, email, type, age} = req.body

        if(!id || !name || !email || !type || !age){
            errorCode = 422
            throw new Error("It is missing a parameter")
        }

        users.push({id, name, email, type, age})

        res.status(200).send(users)

   } catch(error:any){

        res.status(errorCode).send(error.message)

   }
})

//5- 

app.put("/users/:id", (req:Request, res:Response) => {
    let errorCode = 400

    try{

        const userId = Number(req.params.id)
        const userName = req.query.name

        if(!userId || !userName){
            errorCode = 422
            throw new Error("It is missing a parameter")
        }

        for(let i = 0; i < users.length; i++){
            if(users[i].id === userId){
                users[i].name = `${userName} - ALTERADO`
            }
        }

        res.status(200).send()

   } catch(error:any){

        res.status(errorCode).send(error.message)

   }
})

//6- 

app.patch("/users/:id", (req:Request, res:Response) => {
    let errorCode = 400

    try{

        const userId = Number(req.params.id)
        const userName = req.query.name

        if(!userId || !userName){
            errorCode = 422
            throw new Error("It is missing a parameter")
        }

        for(let i = 0; i < users.length; i++){
            if(users[i].id === userId){
                if(users[i].name.includes("ALTERADO"))
                users[i].name = `${userName} - REALTERADO`
            }
        }

        res.status(200).send(users)

   } catch(error:any){

        res.status(errorCode).send(error.message)

   }
})

//7- 

app.delete("/users/:id", (req:Request, res:Response) => {
    let errorCode = 400

    try{

        const userId = Number(req.params.id)

        if(!userId){
            errorCode = 422
            throw new Error("It is missing a parameter")
        }

        const unmacthedId = users.filter((user) => user.id !== userId)

        res.status(200).send(unmacthedId)

   } catch(error:any){

        res.status(errorCode).send(error.message)

   }
})