import { User } from "../model/User"

export interface UserRepository{

    insert(user:User):Promise<User>

    findByEmail(email:string):Promise<User>

    login(email:string):Promise<User>

    makeFriendById(id:string, id_user_requester:string, id_user_requested:string):Promise<void>
}