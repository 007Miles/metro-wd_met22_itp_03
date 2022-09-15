import asyncHandler from '../middleware/async.js'

import {
    addAttendance, 
    getattendanceId,
} from '../services/Attendance.js'


export const markAttendance = asyncHandler(async(req, res)=>{
    const ans = await addAttendance(req.body)
    console.log('Mark attendance is sucsessfull from the Controllers',ans)
    res.send(ans)

})

export const getattencdance = asyncHandler(async(req,res)=>{
    const ans = await getattendanceId(req.params.id)
    res.json(ans)
})

