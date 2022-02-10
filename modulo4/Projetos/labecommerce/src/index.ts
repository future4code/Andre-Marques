import { app } from "./app";
import { createProduct } from "./endpoints/createProduct";
import { createUser } from "./endpoints/createUser";
import { getProducts } from "./endpoints/getAllProducts";
import { getUsers } from "./endpoints/getAllUsers";
import { getUserPurchases } from "./endpoints/getUserPurchases";
import { registerPurchase } from "./endpoints/registerPurchase";

app.get("/users/:id/purchases", getUserPurchases)
app.post("/users", createUser)
app.get("/users", getUsers)
app.post("/products", createProduct)
app.get("/products", getProducts)
app.post("/purchases", registerPurchase)