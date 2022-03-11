import { Request, Response } from "express";
import { RequestListener } from "http";
import { PostBusiness, PostInputDTO } from "../business/PostBusiness";
import PostDataBase from "../data/PostDataBase";
import { Post, POST_TYPES } from "../model/Post";

export class PostController{
    private postBusiness:PostBusiness

    constructor(){
        this.postBusiness = new PostBusiness(new PostDataBase)
    }

    createPost = async(req:Request, res:Response):Promise<void> => {
        const {photo, description, type, author_id} = req.body
        const token = String(req.headers.authorization)

        const input:PostInputDTO = {
            photo,
            description,
            type,
            author_id
        }

        try {
            await this.postBusiness.createPost(input, token)

            res.status(201).send("Post created sucessfully!")

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

    getPostById = async(req:Request, res:Response):Promise<void> => {
        const id = String(req.params.id)
        const token = String(req.headers.authorization)

        try {

            const post = await this.postBusiness.getPostById(id, token)

            res.status(200).send(post)
            
        } catch (error:any) {
            switch (error.message) {
                case "It is missing a parameter!":
                    res.statusCode = 422
                    break
                case "The post was not found!":
                    res.statusCode = 404
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