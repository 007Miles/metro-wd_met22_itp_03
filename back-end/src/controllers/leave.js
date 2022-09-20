import asyncHandler from '../middleware/async.js'

import {
    createleaveform, 
    getleaveId,
    updateLeaveById,
    deleteLeaveById,
} from '../services/leave.js'


export const createleave = asyncHandler(async(req, res)=>{
    const ans = await createleaveform(req.body)
    console.log('Mark leave is sucsessfull from the Controllers',ans)
    res.send(ans)

})

export const getleave = asyncHandler(async(req,res)=>{
    const ans = await getleaveId(req.params.id)
    res.json(ans)
})

export const putleave = asyncHandler(async (req, res) => {
    const ans = await updateLeaveById(req.params.id, req.body)
    res.send(ans)
  })
  
  export const deleteleave = asyncHandler(async (req, res) => {
    const ans = await deleteLeaveById(req.params.id)
    res.send(ans)
  })