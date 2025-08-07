import express from "express";
import dotenv from "dotenv";
import dbConnect from "./database/dbConnect.js";
import cookieParser from "cookie-parser";
import userRout from "./router/userRouter.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT
app.get('/',(req,res)=>{
    res.send("Wellcome Boss");
})


app.use('/api/user', userRout);


app.listen(PORT, ()=>{
    dbConnect();
    console.log(`working at http://localhost:${PORT}`);
})

