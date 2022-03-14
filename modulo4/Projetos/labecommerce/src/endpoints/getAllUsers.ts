import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async ():Promise<any> => {

    const result = await connection("labecommerce_users")
        .select()

    return result
}

export async function getUsers(req:Request, res:Response):Promise<void> {
    let errorCode = 404

    try {
        const users = await getAllUsers()
        
        if(users.length === 0){
            errorCode = 422
            throw new Error("There is no products!")
        }

        res.status(200).send(users)

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}