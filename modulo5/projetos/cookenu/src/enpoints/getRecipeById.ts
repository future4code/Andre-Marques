import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator"

export const getRecipeById = async(req:Request, res:Response):Promise<void> => {
    let codeError = 404

    try {
        const id = String(req.params.id)
        const token = String(req.headers.authorization)

        if(!token || !id){
            codeError = 422
            throw new Error("It is missing a parameter!")
        }

        const authenticator = new Authenticator
        const getToken = authenticator.getTokenData(token)

        if(!getToken){
            codeError = 409
            throw new Error("The token is invalid!")
        }

        const userDataBase = new UserDataBase
        const recipe = await userDataBase.getRecipeById(id)
        console.log(recipe)

        if(!recipe){
            codeError = 409
            throw new Error("This recipe does not exist!")
        }

        res.status(200).send({id: recipe.getId(), title: recipe.getTitle(), description: recipe.getDescripiton(), createAt: recipe.getDate()})

    } catch (error:any) {
        res.status(codeError).send(error.message || error.sqlMessage)
    }
}