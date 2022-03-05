export class Recipe{
    constructor(private id:string, private user_id:string, private title:string, private description:string, private date:string){

    }

    public getId(){
        return this.id
    }

    public getUserId(){
        return this.user_id
    }

    public getTitle(){
        return this.title
    }

    public getDescripiton(){
        return this.description
    }

    public getDate(){
        return this.date
    }

    public static toRecipeModel(data:any):Recipe {
        return new Recipe(data.id, data.user_id, data.title, data.description, data.date)
    }
}