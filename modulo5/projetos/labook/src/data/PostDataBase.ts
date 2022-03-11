import { PostRepository } from "../business/PostRepository";
import { BaseDataBase } from "./BaseDataBase";
import { Post, POST_TYPES } from "../model/Post";

export default class PostDataBase extends BaseDataBase implements PostRepository{
    
    protected TABLE_NAME = "labook_posts"

    createPost = async(post:Post) => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME)
                .insert(post)

            return post

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getPostById = async(id:string) => {
        try {
            const result = await BaseDataBase.connection(this.TABLE_NAME)
                .select("*")
                .where({id})

            return result[0] && Post.toPostModel(result[0])
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}