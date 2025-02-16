import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export const PORT = process.env.PORT||3000
const Mongourl = process.env.MONGO_URL

export const connectDb = async()=>{
    try {
        const response = await mongoose.connect(Mongourl)
        console.log("db connected successfully")
    } catch (error) {
        console.log("db error")
    }
}

