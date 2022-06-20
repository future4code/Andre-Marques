import { Follower } from "../entities/Follower"
import { Recipe } from "../entities/Recipe"
import { User } from "../entities/User"
import { BaseDataBase } from "./BaseDataBase"

export class UserDataBase extends BaseDataBase {

    public async createUser(user:User) {

        try {
            await BaseDataBase.connection("cookenu_user")
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                }) 
                .into("cookenu_user")
            
        } catch (error:any) {
            throw new Error(error.message || error.sqmMessage)
        }
    }

    public async findUserByEmail(email:string):Promise<User> {
        
        try {
            const user = await BaseDataBase.connection("cookenu_user")
                .select("*")
                .where({email})
            
            return user[0] && User.toUserModel(user[0])

        } catch (error:any) {
            throw new Error(error.message || error.sqmMessage)
        }
    }

    public async findUserById(id:string):Promise<User> {
        
        try {
            const user = await BaseDataBase.connection("cookenu_user")
                .select("name", "email", "id")
                .where({id})
            
            return user[0] && User.toUserModel(user[0])

        } catch (error:any) {
            throw new Error(error.message || error.sqmMessage)
        }
    }

    public async createRecepi(recipe:Recipe) {
        
        try {
            await BaseDataBase.connection("cookenu_recipe")
                .insert({
                    id:recipe.getId(),
                    user_id:recipe.getUserId(),
                    title:recipe.getTitle(),
                    description: recipe.getDescripiton(),
                    date: recipe.getDate()
                })
                .into("cookenu_recipe")
            
        } catch (error:any) {
            throw new Error(error.message || error.sqmMessage)
        }
    }

    public async getRecipeById(id:string):Promise<Recipe> {
        
        try {
            const recipe = await BaseDataBase.connection("cookenu_recipe")
                .select("*")
                .where({id})
            
            return recipe[0] && Recipe.toRecipeModel(recipe[0])

        } catch (error:any) {
            throw new Error(error.message || error.sqmMessage)
        }
    }

    public async createFollower(follower:Follower):Promise<void> {
        
        try {
            await BaseDataBase.connection("following")
                .insert({
                    id: follower.getId(),
                    userFollowingId: follower.getUserFollowingId(),
                    userFollowedId: follower.getUserFollowedId()
                })
                .into("following")
            
        } catch (error:any) {
            throw new Error(error.message || error.sqmMessage)
        }
    }    

    public async deleteFollower(userFollowingId:string, userFollowedId:string):Promise<void> {
        
        try {
            await BaseDataBase.connection("following")
                .where({userFollowingId})
                .andWhere({userFollowedId})
                .delete(), { includeTriggerModifications: true }
            
        } catch (error:any) {
            throw new Error(error.message || error.sqmMessage)
        }
    }   
    
    public async getRecipeOfFollowing(id:string):Promise<any> {
        
        try {
            const users = await BaseDataBase.connection("following")
                .join("cookenu_user", "cookenu_user.id", "=", "userFollowedId")
                .join("cookenu_recipe", "cookenu_recipe.user_id", "=", "userFollowedId")
                .select("cookenu_recipe.id", "title", "description", "date", "user_id", "name")
                .where("userFollowingId", id)

        return users

        } catch (error:any) {
            throw new Error(error.message || error.sqmMessage)
        }
    }

}