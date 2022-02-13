import {Request, Response} from "express"
import { connection } from "../data/connection"

export async function fiveUsers(page:number):Promise<any> {

    const result = await connection("aula48_exercicio")
        .select("id", "name", "email", "type")
        .from("aula48_exercicio")
        .limit(5)
        .offset(5 * (page - 1))
        
    return result
 }

export async function usersLenght():Promise<any> {

    const result = await connection("aula48_exercicio")
        .select()
        
    return result
 }

export const getFiveUsers = async(req: Request,res: Response): Promise<void> =>{
    let codeError = 404
    try {
        let page = Number(req.params.page)
        const numberOfUsers = await usersLenght()

        if(page > (numberOfUsers.length/5)){
            page = numberOfUsers.length/5
        }
    
        if(page < 1 || isNaN(page)){
            page = 1
        }

        const users = await fiveUsers(page)

 
       if(!users.length){
          codeError = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       res.status(codeError).send(error.message || error.sq.Message)
    }
 }