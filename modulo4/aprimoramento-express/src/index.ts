import express, { Request, Response} from "express"
import cors from "cors"

import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong!")
})

type toDo = {
    userId:number | string,
    id:number | string,
    title:string,
    completed:boolean
}

const toDoArray:toDo[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": true
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 2,
        "id": 3,
        "title": "et itaque necessitatibus maxime molestiae qui quas velit",
        "completed": true
      },
      {
        "userId": 2,
        "id": 4,
        "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
        "completed": false
      },
      {
        "userId": 3,
        "id": 5,
        "title": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
        "completed": true
      },
      {
        "userId": 3,
        "id": 6,
        "title": "rerum perferendis error quia ut eveniet",
        "completed": false
      },
]

app.get("/todo", (req: Request, res: Response) => {
    const statusCompleted = req.query.completed
    const newArray:toDo[] = []
    console.log(statusCompleted)

    if(!statusCompleted){
        res.status(400).send("It is missing a parameter")
    }

    for(let i = 0; i < toDoArray.length; i++){
        if(toDoArray[i].completed.toString() === statusCompleted){
            newArray.push(toDoArray[i])
        }
    }
    
    res.status(200).send({
        result: newArray
    })
})

app.post("/todo", (req:Request, res:Response) => {
  // const userId:number = Number(req.body.userId)
  // const id:number = Number(req.body.id)
  // const titel:string = req.body.title
  // const completed:boolean = req.body.completed
  const { userId, id, title, completed} = req.body
  
  if(!req.body){
    res.status(400).send("It is missing a parameter!")
  }

  const newArray:toDo[] = [...toDoArray, req.body]

  res.status(200).send({
    result: newArray
  })
})

app.put("/todo/:id", (req:Request, res:Response) => {
  const toDoId = Number(req.params.id)
  console.log(toDoId)

  if(!toDoId){
    res.status(400).send("It is missing a parameter!")
  }

  for(let i = 0; i < toDoArray.length; i++){
    if(toDoArray[i].id === toDoId){
      toDoArray[i].completed = !toDoArray[i].completed
    }
  }

  res.status(200).send({
    result: toDoArray
  })
})

app.delete("/todo/:id", (req:Request, res:Response) => {
  const toDoId = Number(req.params.id)

  if(!toDoId){
    res.status(400).send("It is missing a parameter!")
  }
  
  for(let i = 0; i < toDoArray.length; i++){
    if(toDoArray[i].id === toDoId){
      toDoArray.splice(i, 1)
    }
  }

  res.status(200).send({
    result: toDoArray
  })
})

app.get("/todo/:id", (req:Request, res:Response) => {
  const toDoUserId = Number(req.params.id)
  const newArray:toDo[] = []

  if(!toDoUserId){
    res.status(400).send("It is missing a parameter!")
  }
  
  for(let i = 0; i < toDoArray.length; i++){
    if(toDoArray[i].userId === toDoUserId){
      newArray.push(toDoArray[i])
    }
  }

  res.status(200).send({
    result: newArray
  })
})

// https://documenter.getpostman.com/view/18384036/UVe9SV24