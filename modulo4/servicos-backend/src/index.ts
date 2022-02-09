import { app } from "./app";
import { getAdressUser } from "./endpoints/getAdressUser";

app.post("/adress", getAdressUser)