import User from "../model/userModel.js";
import bcrypt from 'bcrypt';


// sign up
export const signUp = async (req, res) => {
    try {
        const { username, email, password, address } = req.body;
        console.log(req.body);
        
        // check user name length >4
        if (!username || username.length < 4) {
            return res.status(400).send({ message: "username should be greater than 4" });
        }
        // check user already exisst or not
        const existUser = await User.findOne({ username });
        if (existUser) {
            return res.status(400).send({ message: "User already exist" })
        }
        // check email exist or not 
        const existEmail = await User.findOne({ email });
        if (existEmail) {
            return res.status(400).send({ message: "Email already exist" })
        }
        // checkling for password length 
        if (!password || password.length < 6) {
            return res.status(400).send({ message: "Password length should be greater than 6" });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            address
           
        });
        await newUser.save();
        return res.status(200).send({success:true, message: "Sign up successfull" })
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }
};