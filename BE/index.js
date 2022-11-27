import express  from "express";
import dotenv from "dotenv";
import db from "./src/config/db.js";
import router from "./src/routes/routes.js"
dotenv.config();

const app = express();

const sync = async()=>{
    await db.sync();
}
sync();

app.use(express.json());
app.use(router)

app.listen(process.env.APP_PORT, () =>{
    console.log(`server up and running in port ${process.env.APP_PORT} .....` );
});