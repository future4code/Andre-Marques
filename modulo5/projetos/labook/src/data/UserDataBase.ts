import { UserRepository } from "../business/UserRepository";
import { User } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export default class UserDataBase extends BaseDataBase implements UserRepository{

    protected TABLE_USERS = "labook_users"
    protected TABLE_FRIENDSHIP = "labook_friendship"

    insert = async(user:User) => {
        try {
            await BaseDataBase.connection(this.TABLE_USERS)
                .insert(user)

            return user

        } catch (error) {
            throw new Error("The user could not be inserted to the database!")
        }
    }

    findByEmail = async(email:string) => {
        try {
            const result:User[] = await BaseDataBase.connection(this.TABLE_USERS)
                .select("*")
                .where({email})

            return result[0] && User.toUserModel(result[0])
            
        } catch (error) {
            throw new Error("The user could not be found in the database!")
        }
    }

    login = async(email:string) => {
        try {
            const result:User[] = await BaseDataBase.connection(this.TABLE_USERS)
                .select("*")
                .where({email})

            return result[0] && User.toUserModel(result[0])
        } catch (error:any) {
            throw new Error("The user could not be found in the database!")
        }
    }

    makeFriendById = async(id:string, id_user_requester:string, id_user_requested:string) => {
        try {
            await BaseDataBase.connection(this.TABLE_FRIENDSHIP)
                .insert({id, id_user_requester, id_user_requested})

        } catch (error:any) {
            throw new Error("The friendship could not be done!")
        }
    }
}
