import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})






connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log('MONGO DB connection failed !!! ' , err);
    
})


 
/*import { DB_NAME } from './constants.js';
import express from "express";

const app = express ()

;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror",(error)=>{
            console.log("ERRR: ", error);
            throw error
        })
app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on ${process.env.PORT}`);
    
})

    } catch (error) {
        console.log("ERROR: ",error);
        throw err
    }
})()*/