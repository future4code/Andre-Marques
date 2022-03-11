import { User } from "../model/User";
import { Authenticator } from "../services/AuthenticatorData";
import { IdGenerator } from "../services/GenerateID";
import { HashManager } from "../services/HashManager";
import { UserRepository } from "./UserRepository";

export type SignupInputDTO ={
    name:string,
    email:string,
    password:string        
}

export type LoginInputDTO ={
    email:string,
    password:string        
}

export class UserBusiness{

    private hashManager:HashManager
    private authenticator:Authenticator
    private generateID:IdGenerator
    private userDataBase:UserRepository

    constructor(userDataImplementation:UserRepository){
        this.authenticator = new Authenticator()
        this.hashManager = new HashManager()
        this.generateID = new IdGenerator()
        this.userDataBase = userDataImplementation
    }

    signup = async(input:SignupInputDTO) => {

        const {name, email, password} = input

        if(!name || !email || !password){
            throw new Error("It is missing a parameter!")
        }

        const isEmailFound = await this.userDataBase.findByEmail(email)

        if(isEmailFound){
            throw new Error("There is already an account registered with this email!")
        }

        const id:string = this.generateID.generate()

        const hashPassword = await this.hashManager.hash(password)

        const token:string = this.authenticator.generateToken({id})

        const user:User = new User(id, name, email,hashPassword)
        await this.userDataBase.insert(user)

        return token
    }

    login = async(input:LoginInputDTO) => {

        const { email, password } = input

        if(!email || !password){
            throw new Error("It is missing a parameter!")
        }

        const user = await this.userDataBase.login(email)

        if(!user){
            throw new Error("Please insert the right login!")
        }

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())
        
        if(!isPasswordCorrect){
            throw new Error("Please insert the right password!")
        }

        const token = this.authenticator.generateToken({id:user.getId()})

        return token
    }

    makeFriendById = async(id:string, token:string) => {
        const inputId = id
        const inputToken = token

        if(!inputId || !inputToken){
            throw new Error("It is missing a parameter!")
        }

        const getToken = this.authenticator.getTokenData(inputToken)

        if(!getToken){
            throw new Error("The token is unauthorized!")
        }

        const generatedId = this.generateID.generate()

        await this.userDataBase.makeFriendById(generatedId, inputId, getToken.id)
    }
}