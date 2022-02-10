import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAUserPurchases = async (id:string):Promise<any> => {

    const result = await connection.raw(`
        SELECT 
            labecommerce_products.name, 
            labecommerce_purchases.quantity, 
            labecommerce_purchases.total_price 
        FROM labecommerce_purchases
        JOIN labecommerce_users on labecommerce_users.id = ${id}
        JOIN labecommerce_products on labecommerce_products.id = product_id
    `)

    return result[0]
}

export async function getUserPurchases(req:Request, res:Response):Promise<void> {
    let errorCode = 404

    try {
        const id = req.params.id
        
        if(!id){
            errorCode = 422
            throw new Error("There is no products!")
        }

        const purchases = await getAUserPurchases(id)

        res.status(200).send(purchases)

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}