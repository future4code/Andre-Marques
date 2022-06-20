import { Request, Response } from "express"
import { LoginInputDTO, SignupInputDTO, UserBusiness } from "../business/UserBusiness";
import UserDataBase from "../data/UserDataBase";

export class UserController{

    private userBusiness:UserBusiness

    constructor(){
        this.userBusiness = new UserBusiness(new UserDataBase)
    }

    signup = async (req:Request, res:Response):Promise<void> => {

        const { name, email, password } = req.body

            const input:SignupInputDTO = {
                name,
                email,
                password
            }

        try {
            const token = await this.userBusiness.signup(input)

            res.status(201).send(token)

        } catch (error:any) {
            
            switch (error.message) {
                case "It is missing a parameter!":
                    res.statusCode = 422
                    break
                case "There is already an account registered with this email!":
                    res.statusCode = 422
                    break
                default:
                  res.statusCode = 500
                  error.message = error.message
              }

              res.send(error.message)
        }
    }

    login = async(req:Request, res:Response):Promise<void> => {

        const { email, password } = req.body

            const input:LoginInputDTO = {
                email,
                password
            }

        try {
            const token = await this.userBusiness.login(input)

            res.status(200).send(token)

        } catch (error:any) {
            switch (error.message) {
                case "It is missing a parameter!":
                    res.statusCode = 422
                    break
                case "Please insert the right login!":
                    res.statusCode = 422
                    break
                case "Please insert the right password!":
                    res.statusCode = 422
                    break
                default:
                  res.statusCode = 500
                  error.message = error.message
              }

              res.send(error.message)
        }
    }

    makeFriendById = async(req:Request, res:Response):Promise<void> => {
        const id = String(req.params.id)
        const token = String(req.headers.authorization)

        try {
            await this.userBusiness.makeFriendById(id, token)

            res.status(200).send("Friendship done sucessfully!")

        } catch (error:any) {
            switch (error.message) {
                case "It is missing a parameter!":
                    res.statusCode = 422
                    break
                case "The token is unauthorized!":
                    res.statusCode = 401
                    break
                default:
                  res.statusCode = 500
                  error.message = error.message
              }

              res.send(error.message)
        }
    }
}