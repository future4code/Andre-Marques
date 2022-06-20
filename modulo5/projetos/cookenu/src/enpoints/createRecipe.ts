import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import { dateToString } from "../services/Date";
import { IdGenerator } from "../services/idGenerator";


export const createRecipe = async(req:Request, res:Response):Promise<void> => {
    let codeError = 404

    try {
        const { title, description } = req.body
        const token = String(req.headers.authorization)
        const date = dateToString(new Date).split("/").reverse().join("/")
        

        if(!title || !description){
            codeError = 422
            throw new Error("It is missing a parameter!")
        }

        const authenticator = new Authenticator
        const getToken = authenticator.getTokenData(token)

        if(!getToken){
            codeError = 404
            throw new Error("Token is invalid!");
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()
        
        const recipe = new Recipe(id, getToken.id, title, description, date)

        const recipeDataBase = new RecipeDataBase()
        await recipeDataBase.createRecipe(recipe)

        res.status(201).send("The recipe was created sucessfully!")

    } catch (error: any) {
        res.status(codeError).send(error.message || error.sqlMessage)
    }
}