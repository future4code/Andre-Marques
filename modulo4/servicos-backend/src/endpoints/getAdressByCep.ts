import { Request, Response } from "express"
import { getAdressInfo } from "../services/getAdressInfo"

export async function getAdressbyCep(req:Request, res:Response):Promise<void>{
    let errorCode = 404

    try {
        const cep = req.query.cep as string

        const adress = await getAdressInfo(cep)

        if(!adress){
            errorCode = 422
            throw new Error("The getAdressInfo request went wrong!")
        }

        res.status(200).send(adress)

    } catch (error) {
        if(error instanceof Error){
            res.send({ error, message: error.message })
        } else{
            res.send({ message: "Error 500!" })
        }
    }
}