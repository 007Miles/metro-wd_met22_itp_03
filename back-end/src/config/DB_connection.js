import mongoose from "mongoose";
import "dotenv/config";

const DBconnection=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((e)=>{
        console.log("Database connection Error",e);
    });
}
export default DBconnection;
