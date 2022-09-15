// crating a link to call the add funtion
import mongoose from "mongoose"
import submission from "../models/Attendances.js"

export const markAttendance = async(details)=>{  // crating a arrow funtion to add attendance to the data base
    try{
        const addAttendance = new submission({
        empId: details.empId,
        date: details.date,
        cheakIn: details.cheakIn,
        cheakOut: details.cheakOut,
        })

        await addAttendance.save() 
        return {msg: 'Attendance has been submmited'}
    }catch(error){
        return {msg: 'Attendance has not been submmited'}
    }
}

export const getattendance = async (id) => {
    return await submission.findById(mongoose.Types.ObjectId(id))
}