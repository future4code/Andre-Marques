import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Follower } from "../entities/Follower";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";


export const deleteFollower = async(req:Request, res:Response):Promise<void> => {
    let codeError = 404

    try {
        
        const id = String(req.body.id)
        const token = String(req.headers.authorization)

        if(!id || !token){
            codeError = 422
            throw new Error("It is missing a parameter!")
        }

        const authenticator = new Authenticator
        const getToken = authenticator.getTokenData(token)
        console.log(getToken)

        if(!getToken){
            codeError = 409
            throw new Error("Token is invalid!")
        }

        const userDataBase = new UserDataBase
        const user = await userDataBase.findUserById(getToken.id)
        const userUnfollow = await userDataBase.findUserById(id)

        if(!user || !userUnfollow){
            codeError = 409
            throw new Error("The user does not exist")
        }

        await userDataBase.deleteFollower(user.getId(), userUnfollow.getId())

        res.status(201).send("Unfollowed sucessufuly!")

    } catch (error:any) {
        res.status(codeError).send(error.message || error.sqlMessage)
    }

}