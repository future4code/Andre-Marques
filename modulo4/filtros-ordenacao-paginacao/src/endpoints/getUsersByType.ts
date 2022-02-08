import {Request, Response} from "express"
import { connection } from "../data/connection"

export async function selectUsersByType(type:string):Promise<any> {

    const result = await connection("aula48_exercicio")
        .select("id", "name", "email", "type")
        .whereILike("type", `%${type}%`)
 
    return result
 }

export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
    let codeError = 404
    try {

        const type = req.params.type

       const users = await selectUsersByType(type)
 
       if(!users.length){
          codeError = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       res.status(codeError).send(error.message || error.sq.Message)
    }
 }
