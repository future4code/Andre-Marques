import { app } from "./app";
import { getAdressUser } from "./endpoints/getAdressUser";

app.get("/adress", getAdressUser)