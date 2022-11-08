import {
    markAttendance,
    getattendance,
    updateAttendance,
} from "../repository/attendance.js"

export const addAttendance = async({empId,date,checkIn,checkOut,otHrs}) =>{
    const details = {
        empId,
        date: Date(date) ,
        checkIn: Date(checkIn) ,
        checkOut: Date(checkOut) ,
        otHrs,
    }
    const y = await markAttendance(details)
    console.log('No problem on Servvices folder',y)
    return y.msg
}

export const getattendanceId = async (id) => {
    return await getattendance(id)
}

export const updateAttendanceById = async (id, ob) => {
    return await updateAttendance(id, ob)
  }