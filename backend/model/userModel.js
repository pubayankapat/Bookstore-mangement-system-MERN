import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        require: true,
        minLength: 6
    },
    role: {
        type: String,
        require: true
    }
})

const User = mongoose.model("User",userModel)

export default User