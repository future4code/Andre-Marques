import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../entities/AuthenticationData"

export class Authenticator {

    public generate(input:AuthenticationData):string {
        const token = jwt.sign(input, "andre", {
            expiresIn: process.env.TOKEN_EXPIRES_IN
        })
    
    return token as string
    }

    public getTokenData(token:string):AuthenticationData {
        const data = jwt.verify(token, "andre")
        return data as AuthenticationData
    }
}