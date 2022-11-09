import mongoose from "mongoose";

const attendanceSchema = mongoose.Schema(
    {
        empId : {
          type: String,
          required: true,
        //   unique: true,  
        },
        date : {
            type: Date,
            required: true,             
          },
        checkIn : {
            type: Date,
            required: true,
            unique: false,  
        },
        checkOut : {
            type: Date,
            required: false,
            unique: false,  
        },
        otHrs: {
            type: Number,
            required: false,
        },
        
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)

const attendancetable = mongoose.model('attendancetable', attendanceSchema)
export default attendancetable