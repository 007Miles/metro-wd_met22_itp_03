// import mongoose from 'mongoose'

// const connectDB = async () => {
//   console.log(process.env.MONGO_URI)

//   mongoose
//     .connect(process.env.MONGO_URI, { keepAlive: true, connectTimeoutMS: 3000 })
//     .catch((error) => {
//       console.log('Error')
//       logger.error('Error connecting to database')
//       // logger.error(`Error connecting to MongoDB: ${error}`)
//     })
//   mongoose.connection.on('connected', () => {
//     console.log('Connected to database successfully')
//     // logger.info('Connected to database successfully')
//   })
//   // 
  
// }

// export default connectDB

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