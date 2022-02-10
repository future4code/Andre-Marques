import { app } from "./app";
import { createAnAdress } from "./endpoints/createAnAdress";
import { createAnEmail } from "./endpoints/createAnEmail";

app.post("/adress", createAnAdress)
app.post("/email", createAnEmail)