import mongoose from "mongoose";

const leaveSchema = mongoose.Schema(
    {
        empId : {
          type: String,
          required: true,
          unique: true,  
          },
         leaveId: {
            type: String,
            required: true,     
            unique: true,        
          },
          start_date : {
            type: Date,
            required: true,
            unique: false,  
          },
          num_days : {
            type: Number,
            required: true,
            unique: false,  
          },
          approval: {
            type: String,
            required: true,     
            unique: false,        
          },
          reason: {
            type: String,
            required: true,     
            unique: false,        
          }
        
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)

const leavetable = mongoose.model('leavetable', leaveSchema)
export default leavetable
