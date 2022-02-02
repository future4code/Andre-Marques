import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import connection from "./connection"


const app: Express = express()

app.use(express.json())
app.use(cors())

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors

// esse código + essa importação para criar o servidor:
// por performance, é bom o servidor ser o último trecho de código do documento

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})


const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }


  // 1- a) Ela vem a resposta com dois arrays dentro de um array, e a posicao 1 é a posicao da resposta.
  // b)
  const getActorByName = async (name:string): Promise<any> => {
      const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = ${name}
      `)

      return result[0]
  }

  // c)
  const countActors = async (gender:string): Promise<any> => {
      const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actors WHERE gender = ${gender}
      `)

      return result[0].count
  }

  // 2- a)
  const updateActor = async(id:string, salary:number):Promise<void> => {
      await connection("Actor")
        .update({
            salary:salary
        }).where("id", id);
  }

  // b)
  const deleteActor = async(id:string):Promise<void> => {
      await connection("Actor")
        .delete()
        .where("id", id);
  }
  
  // c)
  const getActorByGender = async(gender:string):Promise<any> => {
      const result = await connection("Actor")
        .avg("salary as average")
        .where({gender});

        return result[0].average;
  }

  // 3- a)
  app.get("/actor/:id", async (req:Request, res:Response) => {
      let errorCode = 404
      try{
          const id = req.params.id
          const actor = await getActorById(id)

          res.status(200).send(actor)

      }catch(error:any){
        res.status(errorCode).send({message: error.message})
      }
  })

  //b)
  app.get("/actor", async (req:Request, res:Response) => {
    let errorCode = 404
    try{
        const gender = req.query.gender
        const count = await countActors(gender as string);
        res.status(200).send({quantity: count})

    }catch(error:any){
      res.status(errorCode).send({message: error.message})
    }
})


// 4- a)
app.put("/actor", async (req:Request, res:Response) => {
    let errorCode = 404

    try {
        const {id, salary} = req.body

        await updateActor(id, salary);
        res.status(200).send("Actor was updated sucessfully!")
    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
})

// b)
app.delete("/actor/:id", async (req:Request, res:Response) => {
    let errorCode = 404

    try {
        const id = req.body.id

        await deleteActor(id);
        res.status(200).send("Actor was deleted sucessfully!")
    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
})

// 5- 
const createMovie = async (id:string, title:string, sinopsis:string, releaseDate:Date, rating:number, playingLimitDate:Date):Promise<any> => {
    const result = await connection
        .insert({
            id: id,
            title: title,
            sinopsis: sinopsis,
            release_date: releaseDate,
            rating: rating,
            playing_limit_date: playingLimitDate
        })
        .into("Movies");

        return result
}

app.post("/movies", async (req:Request, res:Response) => {
    let errorCode = 404

    try {
        const {title, sinopsis, releaseDate, rating, playingLimitDate} = req.body

        await createMovie(Date.now().toString(),title,sinopsis,releaseDate,rating,playingLimitDate)
        res.status(201).send("Movie was created sucessfully!")

    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
    
})

// 6-
const getAllMovies = async ():Promise<any> => {
    const result = await connection("Movies").select().limit(15);

    return result
}

app.get("/movie/all", async (req: Request, res: Response) => {
    let errorCode = 404

    try {
      const movies = await getAllMovies()
  
      res.status(200).send({movies: movies,})

    } catch (error:any) {
      res.status(errorCode).send({message: error.message,})
    }
  })

  // 7-
  const searchMovie = async (search:string):Promise<any> => {
      const result = await connection("Movies")
        .select()
        .whereILike("title", search)
  }

  app.get("/movie/search", async (req: Request, res: Response) => {
    let errorCode = 404

    try {
        const query:string = req.query.search as string
        const movies = await searchMovie(query)
  
      res.status(200).send({movies: movies})

    } catch (error:any) {
      res.status(errorCode).send({message: error.message,})
    }
  })


  
  // Assim a chamada funciona fora dos endpoints com .then()/.catch
  getActorById("001")
      .then(result => {
          console.log(result)
      })
      .catch(err => {
          console.log(err)
      });

      
  
  // Assim a chamada funciona fora dos endpoints com await
  (async () => {
    console.log(await getActorById("001") )
  })()
  
  
  // Ou então podemos chamá-la dentro de um endpoint
  app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      console.log(await getActorById(id))
  
      res.end()
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal
