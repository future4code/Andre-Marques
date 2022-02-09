import { Request, Response } from "express"
import { connection } from "../data/connection"

export const createAProduct = async (id:string, name:string, price:number, image_url:string):Promise<void> => {

    await connection("labecommerce_products")
        .insert({id, name, price, image_url})
        .into("labecommerce_products")
}

export async function createProduct(req:Request, res:Response):Promise<void> {
    let errorCode = 404

    try {
        const id = Date.now().toString()
        const {name, price, image_url} = req.body

        if(!name || !price || !image_url){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        }

        await createAProduct(id, name, price, image_url)

        res.status(201).send("The product was created sucessfully!")

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}