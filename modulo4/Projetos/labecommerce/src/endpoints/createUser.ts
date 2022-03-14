import { Request, Response } from "express"
import { connection } from "../data/connection"

export const createAUser = async (id:string, name:string, email:string, password:string):Promise<void> => {

    await connection("labecommerce_users")
        .insert({id, name, email, password})
        .into("labecommerce_users")
}

export async function createUser(req:Request, res:Response):Promise<void> {
    let errorCode = 404

    try {
        const id = Date.now().toString()
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        if(!name || !email || !password){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        }

        await createAUser(id, name, email, password)

        res.status(201).send("The user was created sucessfully!")

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}