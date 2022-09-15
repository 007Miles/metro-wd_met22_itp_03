import mongoose from "mongoose";

const attendanceSchema = mongoose.Schema(
    {
        empId : {
          type: String,
          required: true,
          unique: true,  
        },
        date : {
            type: String,
            required: true,             
          },
          cheakIn : {
            type: String,
            required: true,
            unique: false,  
          },
          cheakOut : {
            type: String,
            required: true,
            unique: false,  
          },
        
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)

const attendancetable = mongoose.model('attendancetable', attendanceSchema)
export default attendancetable
