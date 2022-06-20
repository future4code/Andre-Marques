import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { User } from "../entities/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/idGenerator"

export const signup = async(req:Request, res:Response):Promise<void> => {
    let codeError = 404

    try {
        const {name, email, password} = req.body

        if(!name || !email || !password){
            codeError = 422
            throw new Error("It is missing a parameter!")
        }

        if(password.length < 6){
            codeError = 422
            throw new Error("The password must have at least 6 characters!")
        }

        const userDataBase = new UserDataBase
        const user = await userDataBase.findUserByEmail(email)

        if(user){
            codeError = 409
            throw new Error("This email already exist!")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword)
        await userDataBase.createUser(newUser)

        const authenticator = new Authenticator
        const token = authenticator.generate({id})

        res.status(201).send(token)

    } catch (error:any) {
        res.status(codeError).send(error.message || error.sqlMessage)
    }
}