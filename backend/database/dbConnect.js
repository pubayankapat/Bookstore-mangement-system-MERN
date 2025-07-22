import mongoose from "mongoose"

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully");
    } catch (error) {
        console.log(console.error);
    }
}

export default dbConnect