import express from "express"
import cors from "cors"

import { AddressInfo } from "net"

const app = express();

app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

app.get("/", (req, res) => {
    res.status(200).send("Hello, world!")
})

type User = {
    id:number,
    name:string,
    phone:string,
    email:string,
    website:string
}

type Post = {
    id:number,
    title:string,
    body:string;
    userId:number
}

const users: User[] = [
    {
        id: 1,
        name: "André",
        phone: "97422897",
        email: "andre@gmail.com",
        website: "andre.com.br"
    },
    {
        id: 2,
        name: "Lucas",
        phone: "93642897",
        email: "lucas@gmail.com",
        website: "lucas.com.br"
    },
    {
        id: 3,
        name: "Mariana",
        phone: "99684897",
        email: "mariana@gmail.com",
        website: "mariana.com.br"
    },
    {
        id: 4,
        name: "Sandra",
        phone: "89422897",
        email: "sandra@gmail.com",
        website: "sandra.com.br"
    },
    {
        id: 5,
        name: "Sidney",
        phone: "98756235",
        email: "sidney@gmail.com",
        website: "sidney.com.br"
    }
]  

const posts:Post[] = [
    {
        id: 1,
        title: "aaaaaaaaaaa",
        body: "a1a1a1",
        userId:1
    },
    {
        id: 2,
        title: "bbbbbbbbbbb",
        body: "b1b1b1",
        userId:1
    },
    {
        id: 3,
        title: "ccccccccccc",
        body: "c2c2c2",
        userId:2
    },
    {
        id: 4,
        title: "ddddddddddd",
        body: "d2d2d2",
        userId:2
    },
    {
        id: 5,
        title: "eeeeeeeeeee",
        body: "e3e3e3",
        userId:3
    },
    {
        id: 6,
        title: "fffffffffff",
        body: "f3f3f3",
        userId:3
    },
    {
        id: 7,
        title: "ggggggggggg",
        body: "g4g4g4",
        userId:4
    },
    {
        id: 8,
        title: "hhhhhhhhhhh",
        body: "h4h4h4",
        userId:4
    },
    {
        id: 9,
        title: "jjjjjjjjjjj",
        body: "j5j5j5",
        userId:5
    },
    {
        id: 10,
        title: "kkkkkkkkkkk",
        body: "k5k5k5",
        userId:5
    }
]

app.get("/users", (req, res) => {
    
    res.status(200).send(users).end()
})

app.get("/posts", (req, res) => {

   res.status(200).send(posts).end()
})

app.get("/posts/:id", (req, res) => {
    const userId = Number(req.params.id)

    if(!userId){
        res.status(400).send("It is missing a parameter!")
    }

    const idPosts: Post[] = posts.filter((post) => {
        if(post.userId === userId) {
            return post
        }
    })
    res.status(200).send(idPosts).end()
})

app.delete("/posts/:idPost", (req, res) => {
    const postId = Number(req.params.idPost)

    if(!postId) {
        res.status(400).send("It is missing a parameter!")
    }

    const arrayPosts = [...posts.filter((post) => {
        return post.id !== postId 
    })]
    res.status(200).send(arrayPosts)
})

app.delete("/users/:idUser", (req, res) => {
    const userId = Number(req.params.idUser)

    if(!userId) {
        res.status(400).send("It is missing a parameter!")
    }

    const arrayUsers = [...users.filter((user) => {
        return user.id !== userId 
    })]
    res.status(200).send(arrayUsers)
})

