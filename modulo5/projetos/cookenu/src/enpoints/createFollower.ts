import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Follower } from "../entities/Follower";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";


export const createFollower = async(req:Request, res:Response):Promise<void> => {
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

        if(!getToken){
            codeError = 409
            throw new Error("Token is invalid!")
        }

        const userDataBase = new UserDataBase
        const user = await userDataBase.findUserById(id)

        if(!user){
            codeError = 409
            throw new Error("The user does not exist")
        }

        const generateId = new IdGenerator
        const generatedId = generateId.generate()

        const follower = new Follower(generatedId, getToken.id, user.getId())

        await userDataBase.createFollower(follower)

        res.status(201).send("Followed sucessufuly!")

    } catch (error:any) {
        res.status(codeError).send(error.message || error.sqlMessage)
    }

}