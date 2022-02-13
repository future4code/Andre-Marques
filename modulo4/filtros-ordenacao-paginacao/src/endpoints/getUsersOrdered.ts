import {Request, Response} from "express"
import { connection } from "../data/connection"

export async function orderedUsers(order:string):Promise<any> {

    const result = await connection("aula48_exercicio")
        .select("id", "name", "email", "type")
        .orderBy(order)

    return result
 }

export const getUsersOrdered = async(req: Request,res: Response): Promise<void> =>{
    let codeError = 404
    try {
        let order = req.query.order as string

        if(!order){
            order = "email"
        }

       const users = await orderedUsers(order)
 
       if(!users.length){
          codeError = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       res.status(codeError).send(error.message || error.sq.Message)
    }
 }