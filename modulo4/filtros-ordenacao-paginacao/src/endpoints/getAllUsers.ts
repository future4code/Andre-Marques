import {Request, Response} from "express"
import { connection } from "../data/connection"

export async function allUsers(order:string, page:number, sort?:string, name?:string, type?:string):Promise<any> {
    let result:any = ""
    
    if(name){
        result = await connection("aula48_exercicio")
            .whereILike("name", `%${name}%`)
            .orderBy(order, sort)
            // .limit(5)
            // .offset(5 * (page - 1))    
    }

    if(type){
        result = await connection("aula48_exercicio")
            .whereILike("type", `%${type}%`)
            .orderBy(order, sort)
            // .limit(5)
            // .offset(5 * (page - 1))    
    }  
         
    return result
 }

 export async function usersLenght():Promise<any> {

    const result = await connection("aula48_exercicio")
        .select()
        
    return result
 }

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    let codeError = 404
    try {
        const name = req.query.name as string
        const type = req.query.type as string
        let order = req.query.order as string
        let sort = req.query.sort as string
        let page = Number(req.params.page)
        const numberOfUsers = await usersLenght()  

        if(page > (numberOfUsers.length/5)){
            page = numberOfUsers.length/5
        }
    
        if(page < 1 || isNaN(page)){
            page = 1
        }

        if(!order){
            order = "name"
        }

        if(!sort){
            sort = "ASC"
        }

        const users = await allUsers(order, page, sort, name, type)
 
       if(!users.length){
          codeError = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       res.status(codeError).send(error.message || error.sq.Message)
    }
 }