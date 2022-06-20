import { app } from "./controller/app";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";

const userController = new UserController()
const postController = new PostController()

app.get("/user/post/:id", postController.getPostById)
app.post("/user/friendship/:id", userController.makeFriendById)
app.post("/signup", userController.signup)
app.post("/login", userController.login)
app.post("/user/post", postController.createPost)
