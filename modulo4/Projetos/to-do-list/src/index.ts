import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import connection from "./connection"


const app: Express = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})





// CREATE AN USER----------------------------------------------------------------------------------------------------
// create an id

const createUser = async (id:string, name:string, nickname:string, email:string):Promise<void> => {
    await connection()
        .insert({
            id: id,
            name: name,
            nickname: nickname,
            email: email
        })
        .into("Users")
}

app.put("/user", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const {name, nickname, email} = req.body
        const id = Date.now().toString()

        if(!name || !nickname || !email){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } else{
            await createUser(id, name, nickname, email)
            res.status(201).send("User was created sucessfully!")
        }

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// GET AN USER-------------------------------------------------------------------------------------------------------

const getUserById = async (id:string):Promise<any> => {
    const result:{} = await connection("Users")
        .select("id", "nickname")
        .where("id", id);

    return result
}

app.get("/user/:id", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const id = req.params.id

        const user = await getUserById(id)  

        if(user.length === 0){
            errorCode = 404
            throw new Error("User was not found!")
        }

        res.status(200).send(user)
        

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})

// GET ALL USERS

const getUsers = async ():Promise<any> => {
    const result = await connection("Users")
    .select("id", "nickname")
    .from("Users")
    
    return result
}

app.get("/users/all", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        
        const users = await getUsers()
        res.status(200).send({users:users})
    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// GET TASK BY AN USERID

const getTaskByUserId = async (id:string):Promise<any> => {
    const result = await connection("Users")
        .join("Tasks", "Tasks.creatorUserId", "=", "Users.id")
        .select("Tasks.id", "Tasks.title", "Tasks.description", "Tasks.limitDate", "Tasks.status", "Tasks.creatorUserId", "Users.nickname")
        .where("Tasks.id", id)

    return result
}

app.get("task", async (req:Request, res:Response) => {
    let errorCode = 404

    try {
        const id = req.query.id as string

        const task = await getTaskByUserId(id)

        if(!id){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } else{
            res.status(200).send({tasks: task})
        }
    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
})



// EDIT AN USER------------------------------------------------------------------------------------------------------

const editAnUserById = async (id:string, name:string, nickname:string, email:string):Promise<void> => {
    await connection("Users")
        .where("id", id)
        .update({
            name: name,
            nickname: nickname,
            email: email    
        })
}

app.post("/user/edit/:id", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const id = req.params.id
        const {name, nickname, email} = req.body

        if(name === "" || nickname === "" || email === ""){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } else{
            const update = await editAnUserById(id, name, nickname, email)
            res.status(200).send("User was updated sucessfully!")
        }

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// CREATE A TASK-----------------------------------------------------------------------------------------------------
// create an id

const createTask = async (id:string, title:string, description:string, limitDate:Date, status:string, creatorUserId:string):Promise<any> => {
    
    const result = await connection("Tasks")
        .insert({
            id:id,
            title:title,
            description:description,
            limitDate:limitDate,
            status:status,
            creatorUserId:creatorUserId
        }).into("Tasks")

    return result
}

app.put("/task", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const {title, description, limitDate, status, creatorUserId} = req.body
        // const date = limitDate.split("/").reverse().join("/")
        const dateToStringDate = (date: Date): string => {
            const dd = String(date.getDate()).padStart(2, '0')
            const mm = String(date.getMonth() + 1).padStart(2, '0')
            const yyyy = date.getFullYear()
            return dd + '/' + mm + '/' + yyyy;
        }
        
    

        const id = Date.now().toString()
    
        if(!title || !description || !limitDate || !creatorUserId){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } else{
            await createTask(id, title, description, limitDate, status, creatorUserId)

            res.status(201).send("Task was created sucessfully!")
        }

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// GET A TASK--------------------------------------------------------------------------------------------------------

const getTaskById = async ( id:string):Promise<any> => {
    const result = await connection("Users")
        .join("Tasks", "Tasks.creatorUserId", "=", "Users.id")
        .select("Tasks.id", "Tasks.title", "Tasks.description", "Tasks.limitDate", "Tasks.status", "Tasks.creatorUserId", "Users.nickname")
        .where("Tasks.id", id)

    return result
}

app.get("/task/:id", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const id = req.params.id

        const task = await getTaskById(id)
        
        if(task.length === 0){
            errorCode = 404
            throw new Error("Task was not found!")
        }

        res.status(200).send(task)

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})

// GET ALL TASKS

const getTasks = async ():Promise<any> => {
    const result = await connection("Tasks").select();
    
    return result
}

app.get("/tasks", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        
        const tasks = await getTasks()
        res.status(200).send(tasks)
    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})