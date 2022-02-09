import axios from "axios"
import { Adress } from "../types"

const baseUrl = "https://viacep.com.br/ws"

export const getAdressInfo = async(cep:string):Promise<any> => {

    const result  = await axios.get(`${baseUrl}/${cep}/json`)

    // const adress:Adress = {
    //     street: result.data.logradouro,
    //     neighborhood: result.data.bairro,
    //     city: result.data.cidade,
    //     state: result.data.estado,
    // }
    
    return result
}