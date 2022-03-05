export class Follower{
    
    constructor(private id:string, private userFollowingId:string, private userFollowedId:string){

    }

    public getId(){
        return this.id
    }

    public getUserFollowingId(){
        return this.userFollowingId
    }

    public getUserFollowedId(){
        return this.userFollowedId
    }
}