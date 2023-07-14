import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(db => console.log(`MongoDB Connected`) )
        .catch(error => console.error(error))   
    } catch (error) {
        console.log('Error al conectar a la BD '+error);
    }
}

export default connectDB