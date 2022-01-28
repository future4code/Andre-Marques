import express, { Request, Response } from "express"
import cors from "cors"
import { products } from "./data"
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

type Product = {
  id:string,
  name:string,
  price:number
}

const exportedProducts:Product[] = products

// Test
app.get("/test", (req:Request, res:Response) => {
    res.status(200).send(exportedProducts)
})

// Get all products
app.get("/products", (req:Request, res:Response) => {

  
  const search = req.query.name

  if(search){
    products.forEach((product) => {
      if(product.name === search){
        res.send(product)
      }
    })
  }

  if(!exportedProducts){
  res.status(400).send("There are no products")
  }

  res.status(200).send(exportedProducts)
})

// Create a new product
app.post("/products", (req:Request, res:Response) => {

  try{
    const {name, price} = req.body

    if(!name || (!price && price !== 0)){
      throw new Error("It is missing one or more parameters!")
    }

    if(typeof(name) !== "string" ){
      throw new Error("Name is not a 'string'!")
    }

    if(typeof(price) !== "number"){
      throw new Error("Price is not a 'number!")
    }

    if(price <= 0){
      throw new Error("Price can not be less than or equal '0'!")
    }

    exportedProducts.push({id:Date.now().toString(), name:name, price:price})

    res.status(200).send(exportedProducts)

  } catch(error: any) {
    switch(error.message){
      case "It is missing one or more parameters!":
        res.statusCode = 422
        break

      case "Name is not a 'string'!":
        res.statusCode = 422
        break

      case "Price is not a 'number!":
        res.statusCode = 422
        break

      case "Price can not be less than or equal '0'!":
        res.statusCode = 422
        break

      default:
        res.statusCode = 500
        break
    }

    res.send(error.message)
  }
})

// Edit a product
app.put("/products/:id", (req:Request, res:Response) => {

  try {
    const productId = req.params.id
    const {price, name} = req.body
    let isProductFound = false

    if((!price || price !== 0) && !name){
      throw new Error("There is missing one or more parameters!")
    }

    if((!price || price !== 0) || !name){
      if(price){
        for(let i = 0; i < exportedProducts.length; i++){
          if(productId === exportedProducts[i].id){
            exportedProducts[i].price = price
            isProductFound = true
          }
        }
      }

      if(name){
        for(let i = 0; i < exportedProducts.length; i++){
          if(productId === exportedProducts[i].id){
            exportedProducts[i].name = name
            isProductFound = true
          }
        }
      }
    }

    if(price && typeof(price) !== "number"){
      throw new Error("Price is not a 'number!")
    } 
    
    if(price <= 0){
      throw new Error("Price can not be less than or equal '0'!")
    }

    if(!productId){
      throw new Error("There is missing one or more parameters!")
    }    

    // for(let i = 0; i < exportedProducts.length; i++){
    //   if(productId === exportedProducts[i].id){
    //     exportedProducts[i].price = price
    //     exportedProducts[i].name = name
    //     isProductFound = true
    //   }
    // }

    if(!isProductFound){
      throw new Error("The product was not found!")
    }

    res.status(200).send(exportedProducts)

    } catch(error: any){
      switch(error.message){
        case "There is missing one or more parameters!":
          res.statusCode = 422
          break

        case "Price is not a 'number!":
          res.statusCode = 422
          break

        case "Price can not be less than or equal '0'!":
          res.statusCode = 422
          break

        case "The product was not found!":
          res.statusCode = 404
          break

        default:
          res.statusCode = 500
          break
      }

      res.send(error.message)
  }
})

// delete a product
app.delete("/products", (req:Request, res:Response) => {

  try {
    const productId = req.query.id
    let isProductFound = false

  if(!productId){
    throw new Error("It is missing the product´s id")
  }



  for(let i = 0; i < exportedProducts.length; i++){
    if(productId === exportedProducts[i].id){
      exportedProducts.splice(i, 1)
      isProductFound = true
    }
  }

  if(!isProductFound){
    throw new Error("The product was not found!")
  }

  res.status(200).send(exportedProducts)  

  } catch(error:any){
    switch(error.message){
      case "It is missing the product´s id":
        res.statusCode = 422
        break

      case "The product was not found!":
        res.statusCode = 404
        break  

      default:
        res.statusCode = 500
        break
    }

    res.send(error.message)
  }  
})