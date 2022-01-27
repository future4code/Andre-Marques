import express, { Request, Response } from "express"
import cors from "cors"
import { users, UserType } from "./data" 

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

type User = {
    id:number,
    name:string,
    email:string,
    type:UserType,
    age:number
}


// 1- a) GET
//     b) users   

// app.get("/users", (req:Request, res:Response) => {
//     let errorCode = 400
//     try{

//     if(!users){
//         errorCode = 404
//         throw new Error("The users were not found!")
//     }

//     res.status(200).send(users)

//    } catch(error: any){

//     res.status(errorCode). send(error.message)

//    }
// })


// 2- a) Query, porque o endpoint GET nao aceita body.
//    b) Sim.

// app.get("/users", (req:Request, res:Response) => {
//     let errorCode = 400
//     const type:UserType = req.query.type as UserType
    
//     try{

//         if(!type){
//             errorCode = 422
//             throw new Error("It is missing a parameter")
//         }

//         const machtedType:User[] = users.filter((user) => user.type === type)

//         if(type !== UserType.ADMIN || UserType.NORMAL){
//             errorCode = 422
//             throw new Error("The parameter is not valid")
//         }
    
//         res.status(200).send(machtedType)
    
//        } catch(error: any){
    
//         res.status(errorCode). send(error.message)
    
//        }
// })

// 3- a) Query
//    b) 

app.get("/users", (req:Request, res:Response) => {
    let errorCode = 400
    let user:User[] = []
    let isUserFound = false
    try{

        const name:string = req.query.name as string

        if(!name){
            errorCode = 422
            throw new Error("It is missing a parameter")
        }

        for(let i = 0; i < users.length; i++){
            if(users[i].name.toLowerCase() === name.toLowerCase()){
                user.push(users[i])
                isUserFound = true
            }
        }

        if(!isUserFound){
            errorCode = 404
            throw new Error("The user was not found!")
        }

        res.status(200).send(user)

   } catch(error:any){

        res.status(errorCode).send(error.message)

   }
})

// 4- a) Nada
//    b) Sim, porém nao segue as boas praticas.

app.put("/users", (req:Request, res:Response) => {
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