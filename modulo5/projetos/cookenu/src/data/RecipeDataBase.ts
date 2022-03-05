import { Recipe } from "../entities/Recipe"
import { User } from "../entities/User"
import { BaseDataBase } from "./BaseDataBase"

export class RecipeDataBase extends BaseDataBase {

    public async createRecipe(recipe:Recipe) {
        
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
}