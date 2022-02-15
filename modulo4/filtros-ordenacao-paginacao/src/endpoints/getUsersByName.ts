import {Request, Response} from "express"
import { connection } from "../data/connection"

export async function selectUsersByName(name:string):Promise<any> {

    const result = await connection("aula48_exercicio")
        .select("id", "name", "email", "type")
        .whereILike("name", `%${name}%`)
 
    return result
 }

export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
    let codeError = 404
    try {
        const name = req.query.name as string

       const users = await selectUsersByName(name)
 
       if(!users.length){
          codeError = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       res.status(codeError).send(error.message || error.sq.Message)
    }
 }