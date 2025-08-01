import express from "express";
import dotenv from "dotenv";
import dbConnect from "./database/dbConnect.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();


const PORT = process.env.PORT
app.get('/',(req,res)=>{
    res.send("Server working")
})

app.use(express.json())
app.use(cookieParser())

app.listen(PORT, ()=>{
    dbConnect();
    console.log(`working at http://localhost:${PORT}`)
})

