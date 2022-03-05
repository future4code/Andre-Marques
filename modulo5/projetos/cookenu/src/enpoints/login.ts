import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/idGenerator"

export const login = async(req:Request, res:Response):Promise<void> => {
    let codeError = 404

    try {
        const {email, password} = req.body

        if(!email || !password){
            codeError = 422
            throw new Error("It is missing a parameter!")
        }

        const userDataBase = new UserDataBase
        const user = await userDataBase.findUserByEmail(email)

        if(!user){
            codeError = 409
            throw new Error("This email does not exist!")
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if(!passwordIsCorrect){
            codeError = 401
            throw new Error("Email or password is incorrect!")
        }
        const date = new Date

        const authenticator = new Authenticator
        const token = authenticator.generate({id: user.getId()})

        res.status(200).send(token)

    } catch (error:any) {
        res.status(codeError).send(error.message || error.sqlMessage)
    }
}