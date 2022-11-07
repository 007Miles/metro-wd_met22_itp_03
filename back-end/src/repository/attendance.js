import mongoose from 'mongoose'
import attendancetable from '../models/attendance.js'
import submission from '../models/attendance.js'

export const markAttendance = async (details) => {
  // crating a arrow funtion to add attendance to the data base
  try {
    const addAttendance = new submission({
      empId: details.empId,
      date: details.date,
      checkIn: details.checkIn,
      checkOut: details.checkOut,
      otHrs: details.otHrs,
    })


    await addAttendance.save()
    return { msg: 'Attendance has been submmited' }
  } catch (error) {
    return { msg: 'Attendance has not been submmited' }
  }
}

export const getattendance = async (id) => {
  return await submission.findOne({empId: id})
}

export const updateAttendance = async (id, ob) => {
  try {
    console.log("data"+ob)
    await attendancetable.findOneAndUpdate({empId: id}, ob)
    console.log("kkkkkkk")
    return attendancetable.findOne({empId: id})
  } catch (error) {
    return { msg: 'update Error' }
  }
}
