import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator"

export const getRecipeOfFollowing = async(req:Request, res:Response):Promise<void> => {
    let codeError = 404

    try {
        const token = String(req.headers.authorization)

        if(!token){
            codeError = 422
            throw new Error("It is missing a parameter!")
        }

        const authenticator = new Authenticator
        const getToken = authenticator.getTokenData(token)

        if(!getToken){
            codeError = 409
            throw new Error("Token is invalid!")
        }

        const userDataBase = new UserDataBase
        const user = await userDataBase.findUserById(getToken.id)

        if(!user){
            codeError = 409
            throw new Error("This user does not exist!")
        }

        const result = await userDataBase.getRecipeOfFollowing(user.getId())

        if(!result){
            codeError = 422
            throw new Error("There is no recipe!")
        }

        res.status(200).send(result)

    } catch (error:any) {
        res.status(codeError).send(error.message || error.sqlMessage)
    }
}