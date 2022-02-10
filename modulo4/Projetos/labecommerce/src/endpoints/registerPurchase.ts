import { Request, Response } from "express"
import { connection } from "../data/connection"

export const registerAPurchase = async (id:string, user_id:string, product_id:string, quantity:number, total_price:number):Promise<void> => {

    await connection("labecommerce_purchases")
        .insert({id: id, user_id: user_id, product_id:product_id, quantity:quantity, total_price:total_price})
        .into("labecommerce_purchases")
}

export const productPrice = async (id:string):Promise<any> => {

    const result = await connection("labecommerce_products")
        .select("price")
        .where("id", id)

    return result[0]
}

export async function registerPurchase(req:Request, res:Response):Promise<void> {
    let errorCode = 404

    try {
        const id = Date.now().toString()
        let total_price:number = 0
        const {user_id, product_id, quantity} = req.body
        const price = await productPrice(product_id)
        console.log(price)

        if(!user_id || !product_id || !quantity){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        }

        if(price){
            total_price = price.price * quantity
        } else {
            errorCode = 422
            throw new Error("The price request went wrong!")
        }

        await registerAPurchase(id, user_id, product_id, quantity, total_price)

        res.status(201).send("The product was created sucessfully!")

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}