import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import connection from "./connection"
import moment from "moment"

// const moment = require("moment")
// let now = moment().format("LLLL")
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

const dateToStringDate = (date:Date):any => {
    const day = (date.getDate())
    const month = (date.getMonth() + 1)
    const year = date.getFullYear()

    return `${year}/${month}/${day}`
}



// EXERCICIO 8 - GET AN USER BY NAME OR EMAIL---------------------------------------------------------------------------------------------------------------------

const getUserByNameOrEmail = async (text:string):Promise<any> =>{

    const result = await connection("Users")
        .select("id", "nickname")
        .whereILike("nickname", `%${text}%`)
        .orWhere("email", "like", `%${text}%`)
        
    return result
}

app.get("/user", async (req:Request, res:Response) => {
    let errorCode = 404

    try {
        const text = req.query.text as string

        const user = await getUserByNameOrEmail(text)

        if(!text){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } else{
            res.status(200).send({users: user})
        }

        
    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
})





// EXERICIO 2 - GET AN USER BY ID-------------------------------------------------------------------------------------------------------

const getUserById = async (id:string):Promise<any> => {
    const result = await connection("Users")
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

// EXERCICIO 6 - GET ALL USERS-------------------------------------------------------------------------------------------------------------------------

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




// EXERCICIO 14 - GET ALL DELAYED TASKS

const getAllDelayedTasks = async ():Promise<any> => {
    const result = await connection("Tasks")
        .select()
    
    return result
}

app.get("/task/delayed", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const result = await getAllDelayedTasks()
        let array = []

        for(let i = 0; i < result.length; i++){
            if((new Date(result[i].limitDate).valueOf()) - new Date().valueOf() < 0 || result[i].status !== "done"){
                console.log((new Date(result[i].limitDate).valueOf()) - new Date().valueOf())
                array.push(result[i])
           }
        }
        

        res.status(200).send(array)

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// EXERCICIO 7 - GET TASK BY AN USERID------------------------------------------------------------------------------------------------------------------

const getTaskByUserId = async (id:string):Promise<any> => {
    const result = await connection("Users")
        .join("Tasks", "Tasks.creatorUserId", "=", "Users.id")
        .select("Tasks.id", "Tasks.title", "Tasks.description", "Tasks.limitDate", "Tasks.status", "Tasks.creatorUserId", "Users.nickname")
        .where("Tasks.creatorUserId", id)

    return result
}

app.get("/tasks/task", async (req:Request, res:Response) => {
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




// GET RELATIONAL TABLE--------------------------------------------------------------------------------------------------------------------------------------

const getRelationalTables = async ():Promise<any> => {
    const result = await connection("RelationalTables").select();
    
    return result
}

app.get("/task/relationaltables", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const tasksAndUsers = await getRelationalTables()

        res.status(200).send(tasksAndUsers)
    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// EXERCICIO 5 E 11 - GET A TASK BY ID--------------------------------------------------------------------------------------------------------

const getTaskByIdTask = async ( id:string):Promise<any> => {
    const result = await connection("Tasks")
        .select()
        .where("Tasks.id", id)
        
    return result
}

const getTaskByIdUser = async (id:string):Promise<any> => {
    const result = await connection("RelationalTables")
        .join("Users", "userId", "=", "Users.id")
        .select("userId", "Users.nickname")
        .where("taskId", id)
        
    return result
}

const getCreatorUserNickname = async (id:string):Promise<any> => {
    const result = await connection("Tasks")
        .join("Users", "Users.Id", "=", "Tasks.creatorUserId")
        .select("Users.nickname")
        .where("Tasks.id", id)
        
    return result
}

app.get("/task/:id", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const id = req.params.id as string

        if(!id || (id === undefined) || (id === null)){
            errorCode = 404
            throw new Error("It is missing a parameter!")
        }

        const task = await getTaskByIdTask(id)
        const user = await getTaskByIdUser(id)
        const nickname = await getCreatorUserNickname(id)

        if(task.length === 0){
            errorCode = 404
            throw new Error("Task was not found or it is missing a parameter!")
        }
      
        const newTask = {...task[0], creatorUserNickname: nickname[0].nickname ,responsibleUsers: user}

        res.status(200).send(newTask)

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// EXERCICIO 10 - GET A USER RESPONSIBLE OF TASKS BY TASK ID--------------------------------------------------------------------------------------------------------

const getUserResponsibleByTaskId = async (id:string):Promise<any> => {
    const result = await connection("RelationalTables")
        .join("Users", "userId", "=", "Users.id")
        .select("userId", "Users.nickname")
        .where("taskId", id)

    return result
}

app.get("/task/:id/responsible", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const id = req.params.id

        const result = await getUserResponsibleByTaskId(id)
        
        if(!id){
            errorCode = 404
            throw new Error("It is missing a parameter!")
        }

        if(result.length === 0){
            errorCode = 404
            throw new Error("Task was not found!")
        }

        res.status(200).send(result)

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})




// EXERCICIO 13 - GET ALL TASKS BY STATUS

const getTasksByStatus = async (status:string):Promise<any> => {
    const result = await connection("Tasks")
        .select("Tasks.id", "Tasks.title", "Tasks.description", "Tasks.limitDate", "Tasks.creatorUserId")
        .whereILike("Tasks.status", status)

    return result
}

const getCreatorUserNickname1 = async (status:string):Promise<any> => {
    const result = await connection("Tasks")
        .join("Users", "Users.Id", "=", "Tasks.creatorUserId")
        .select("Users.nickname")
        .whereILike("Tasks.status", status)
        
    return result
}

app.get("/task", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const status = req.query.status as string

        const result = await getTasksByStatus(status)
        const nickname = await getCreatorUserNickname1(status)
        const array = []

        if(!status){
            errorCode = 404
            throw new Error("It is missing a parameter!")
        }

        for(let i = 0; i < result.length; i++){
            let newResult = {...result[i], creatorUserNickname: nickname[i].nickname}
            array.push(newResult)
        }
        // const newResult = {...result, creatorUserNickname: nickname[0].nickname}
        res.status(200).send(array)

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})




// GET ALL TASKS----------------------------------------------------------------------------------------------------------------------------------------------------

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





// EXERCICIO 3 - EDIT AN USER---------------------------------------------------------------------------------------------------------------------------

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




// EXERCICIO 12 - UPDATE A TASK`STATUS----------------------------------------------------------------------------------------------------------------------

const updateStatus = async (id:string, status:string):Promise<void> => {
    await connection("Tasks")
        .where("Tasks.id", id)
        .update({status: status})
}

app.post("/task/status/edit", async (req:Request, res:Response) => {
    let errorCode = 404

    try {
        const id = req.query.id as string
        const status = req.body.status

        if(!id || !status){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } else{
            updateStatus(id, status)
            res.status(200).send("The status was updated sucessfully!")
        }

    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
})


// EXERCICIO 9 - GIVE AN USER A TASK

const giveAnUserATask = async (taskId:string, userId:string):Promise<void> => {
    await connection("RelationalTables")
        .insert({taskId:taskId, userId:userId})
        .into("RelationalTables")
}

app.post("/task/responsibles", async (req:Request, res:Response) => {
    let errorCode = 404

    try {
        const {taskId, userId} = req.body

        if(!taskId || !userId){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } else{
            giveAnUserATask(taskId, userId)
            res.status(200).send("The task was given sucessfully!")
        }

    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
})




// EXERCICIO 4 - CREATE A TASK----------------------------------------------------------------------------------------------------------------------------
// create an id

const createTask = async (id:string, title:string, description:string, limitDate:Date, status:string, creatorUserId:string):Promise<any> => {
    
    const result = await connection("Tasks")
        .insert({
            id:id,
            title:title,
            description:description,
            limitDate:moment(limitDate).format("YYYY/MM/DD"),
            status:status,
            creatorUserId:creatorUserId
        }).into("Tasks") 
        
    return result
}

app.put("/task", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{
        const {title, description, limitDate, status, creatorUserId} = req.body
        console.log(moment(limitDate).format("YYYY/MM/DD"))
        // console.log(typeof(limitDate))
        // console.log(typeof(date))
        // const newDate = new Date(date)
        // const date1 = dateToStringDate(newDate)
        // console.log(date1)
        // console.log(typeof(date1))
        const id = Date.now().toString()
    
        if(!title || !description || !limitDate || !creatorUserId){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } 
        
        await createTask(id, title, description, limitDate, status, creatorUserId)

        res.status(201).send("Task was created sucessfully!")
        

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})





// EXERCICIO 1 - CREATE AN USER-----------------------------------------------------------------------------------------------------------------------
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




// EXERCICIO 15 - DELETE A RESPONSIBLE USER FROM A TASK

const comparingTaskId= async (taskId:string):Promise<any> => {
    
    const result = await connection("RelationalTables")
        .select("taskId")
        .where("taskId", taskId)
        
    return result
}

const comparingResponsibleId= async (responsibleUserId:string):Promise<any> => {
    
    const result = await connection("RelationalTables")
        .select("userId")
        .where("userId", responsibleUserId)
        
    return result
}

const deleteAResponsibleUserFromATask = async (taskId:string, responsibleUserId:string):Promise<any> => {
    
    const result = await connection("RelationalTables")
        .where("userId" , responsibleUserId)
        .andWhere("taskId", taskId)
        .del()

    return result
}

app.delete("/task/:taskId/responsible/:responsibleUserId", async (req:Request, res:Response) => {
    let errorCode = 404

    try {
        const {taskId, responsibleUserId} = req.params

        if(!taskId || !responsibleUserId){
            errorCode = 422
            throw new Error("It is missing a parameter!")
        } 

        const task = await comparingTaskId(taskId)
        const responsible = await comparingResponsibleId(responsibleUserId)

        if(task.length === 0 && responsible.length > 0){
            errorCode = 422
            throw new Error("The taskId was not found!")
        }
        
        if(responsible.length === 0 && task.length > 0){
            errorCode = 422
            throw new Error("The responsibleId was not found!")
        }

        if(responsible.length === 0 && task.length === 0){
            errorCode = 422
            throw new Error("The responsibleId and taskId ware not found!")
        }

        const result = await deleteAResponsibleUserFromATask(taskId, responsibleUserId)

        res.status(200).send(result)

    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
})


