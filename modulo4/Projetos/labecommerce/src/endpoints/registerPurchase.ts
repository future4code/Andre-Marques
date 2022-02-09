import { Request, Response } from "express"
import { connection } from "../data/connection"

export const registerAPurchase = async (id:string, user_id:string, product_id:string, quantity:number, total_price:number):Promise<void> => {

    await connection("labecommerce_purchases")
        .insert({id, user_id, product_id, quantity, total_price})
        .into("labecommerce_purchases")
}

export async function registerPurchase(req:Request, res:Response):Promise<void> {
    let errorCode = 404

    try {
        const id = Date.now().toString()
        const total_price = 
        const {user_id, product_id, quantity} = req.body

        if(!name || !price || !image_url){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        }

        await registerAPurchase(id, name, price, image_url)

        res.status(201).send("The product was created sucessfully!")

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}