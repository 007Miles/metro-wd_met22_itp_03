import mongoose from "mongoose";

const buyerSchema=mongoose.Schema({
    businessName:{
        type: String,
        required: true,
        unique: true,
      },
      address:{
        type: String,
        required: true,
        unique: true,
      },
      phone:{
        type: Number,
        required: true,
        unique: true,
      },
      email:{
        type:String,
        require:true,
        unique:true
      },
      credentialId:{
        type:String,
        require:true,
        unique:true
      },      
});

const buyerAccountSchema=mongoose.model("buyeraccount",buyerSchema);
export default buyerAccountSchema;