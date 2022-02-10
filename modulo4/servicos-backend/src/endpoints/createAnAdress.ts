import { Request, Response } from "express"
import { connection } from "../data/connection"
import { getAdressInfo } from "../services/getAdressInfo"

export const createAdress = async(userId:string, cep:string, number:number, complement?:string):Promise<any> => {
    const adress = await getAdressInfo(cep)

    const user = await connection("users")
        .select("id")
        .where("id", userId)

    console.log(user[0])

    const result = await connection("adress")
        .insert({
            userId: user[0].id,
            cep:cep,
            street:adress.data.logradouro,
            number:number,
            complement:complement,
            neighborhood:adress.data.bairro,
            city:adress.data.localidade,
            state:adress.data.uf
        })
        .into("adress")

    return result
}

export async function createAnAdress(req:Request, res:Response):Promise<void>{
    let errorCode = 404

    try {
        const id = req.body.id as string
        const cep = req.body.cep as string
        const number = Number(req.body.number)
        const complement = req.body.complement as string
        const adress = await createAdress(id, cep, number, complement)

        if(!adress){
            errorCode = 422
            throw new Error("The getAdressInfo request went wrong!")
        }

        res.status(200).send("The adress was created sucessfully!")

    } catch (error) {
        if(error instanceof Error){
            res.send({ error, message: error.message })
        } else{
            res.send({ message: "Error 500!" })
        }
    }
}