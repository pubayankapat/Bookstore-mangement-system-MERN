import Router from "express"
import { signUp } from "../controller/authUserController.js";

const userRout = Router();

// routing to sign up page
userRout.post('/signUp',signUp);

export default userRout;
