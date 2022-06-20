import { app } from "./app"
import { createFollower } from "./enpoints/createFollower"
import { createRecipe } from "./enpoints/createRecipe"
import { deleteFollower } from "./enpoints/deleteFollower"
import { getDataUser } from "./enpoints/getDataUser"
import { getRecipeById } from "./enpoints/getRecipeById"
import { getRecipeOfFollowing } from "./enpoints/getRecipeOfFollowing"
import { getUserProfile } from "./enpoints/getUserProfile"
import { login } from "./enpoints/login"
import { signup } from "./enpoints/signup"

app.post("/signup", signup)
app.post("/login", login)
app.post("/recipe", createRecipe)
app.post("/user/follow", createFollower)
app.post("/user/unfollow", deleteFollower)
app.get("/user/profile", getDataUser)
app.get("/user/feed", getRecipeOfFollowing)
app.get("/user/:id", getUserProfile)
app.get("/recipe/:id", getRecipeById)




