import { Post, POST_TYPES } from "../model/Post"

export interface PostRepository{

    createPost(post:Post):Promise<Post>

    getPostById(id:string):Promise<Post>
}