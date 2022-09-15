import {
    markAttendance,
    getattendance,
} from "../repository/Attendance.js"

export const addAttendance = async({empId,date,cheakIn,cheakOut}) =>{
    const details = {
        empId,
        date: Date(date) ,
        cheakIn,
        cheakOut,
    }
    const y = await markAttendance(details)
    console.log('No problem on Servvices folder',y)
    return y.msg
}

export const getattendanceId = async (id) => {
    return await getattendance(id)
}
