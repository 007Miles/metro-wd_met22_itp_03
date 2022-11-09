import asyncHandler from '../middleware/async.js'

import {
    addAttendance, 
    getattendanceId,
    updateAttendanceById
} from '../services/attendance.js'


export const markAttendance = asyncHandler(async(req, res)=>{
    const ans = await addAttendance(req.body)
    console.log('Mark attendance is sucsessfull from the Controllers',ans)
    res.send(ans)

})

export const getattencdance = asyncHandler(async(req,res)=>{
    const ans = await getattendanceId(req.params.id)
    res.json(ans)
})

export const updateAttendance = asyncHandler(async (req, res) => {
    const a = await updateAttendanceById(req.params.id, req.body)
    res.status(203)
    res.send(a)
  })