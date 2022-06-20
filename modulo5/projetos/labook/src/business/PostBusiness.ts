import { Post, POST_TYPES } from "../model/Post"
import { Authenticator } from "../services/AuthenticatorData"
import { dateToString } from "../services/Date"
import { IdGenerator } from "../services/GenerateID"
import { PostRepository } from "./PostRepository"

export type PostInputDTO = {
    photo:string,
    description: string,
    type:POST_TYPES,
    author_id:string
}

export class PostBusiness{
    private authenticator:Authenticator
    private postDataBase:PostRepository
    private generateID:IdGenerator

    constructor(postDataImplementation:PostRepository){
        this.authenticator = new Authenticator()
        this.generateID = new IdGenerator()
        this.postDataBase = postDataImplementation
    }

    createPost = async(input:PostInputDTO, token:string) => {
        const {photo, description, type, author_id} = input
        
        if(!photo || !description || !type || !author_id){
            throw new Error("It is missing a parameter!")
        }
        
        const getToken = this.authenticator.getTokenData(token)
        
        if(!getToken){
            throw new Error("The token is unauthorized!")
        }
        
        const id = this.generateID.generate()
        const created_at:Date = new Date()

        const post:Post = new Post(id, photo, description, type, created_at, author_id)

        await this.postDataBase.createPost(post)
    }

    getPostById = async(id:string, token:string) => {
        const inputId = id
        const inputToken = token

        if(!inputId || !inputToken){
            throw new Error("It is missing a parameter!")
        }

        const getToken = this.authenticator.getTokenData(inputToken)

        if(!getToken){
            throw new Error("The token is unauthorized!")
        }

        const result = await this.postDataBase.getPostById(inputId)

        return result

    }
}