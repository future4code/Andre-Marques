import express, { Express, Request, Response } from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})





// CREATE AN USER----------------------------------------------------------------------------------------------------
// create an id
app.post("/user", (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const {name, nickname, email} = req.body

        if(!name || !nickname || !email){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } else{


            res.status(201).send(users)
        }

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// GET AN USER-------------------------------------------------------------------------------------------------------

app.get("/user/:id", (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const id = req.params.id

        const isUserFound = users.filter((user) => {
            if(user.id === id){
                res.status(200).send({user.id, user.nickname})
                return true
            } else{
                return false
            }
        })

        if(!isUserFound){
            errorCode = 422
            throw new Error("User was not found!")
        }

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// EDIT AN USER------------------------------------------------------------------------------------------------------

app.put("/user/edit/:id", (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const id = req.params.id
        const {name, nickname} = req.body

        if(!name || !nickname){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        }

        for(let i = 0; i < users.length; i++){
            if(users[i].id === id){
                users[i].name = name
                users[i].nickname = nickname
                res.status(200).send(users[i])
            }
        }

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// CREATE A TASK-----------------------------------------------------------------------------------------------------
// create an id
app.post("/task", (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const {title, description, limitDate, creatorUserId} = req.body
        const date:Date = new Date(limitDate)

        if(!title || !description || !limitDate || !creatorUserId){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } else{


            res.status(201).send()
        }

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// GET A TASK--------------------------------------------------------------------------------------------------------

app.get("/task/:id", (req:Request, res:Response) => {
    let errorCode:number = 404

    try{

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})