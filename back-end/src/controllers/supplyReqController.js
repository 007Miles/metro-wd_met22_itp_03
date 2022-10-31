import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import {
  addSupplyReq,
  getSupplyReqById,
  deleteSupplyReqById,
  updateSupplyReqById,
  getAllSupplyReqs,
} from '../services/supplyReq.js'

//Insert A New Supply Request
export const supplyReqAdd = asyncHandler(async (req, res) => {
  const ans = await addSupplyReq(req.body)
  return makeResponse({
    res,
    status: 201,
    data: ans,
    massage: 'Supply inspection request successfully created',
  })
})

//Get Data Of One Supply Request
export const supplyReqGet = asyncHandler(async (req, res) => {
  const ans = await getSupplyReqById(req.params.id)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'Single Supply inspection request successfully fetched',
  })
})

//Get Data Of All Supply Requests
export const suppliesReqGet = asyncHandler(async (req, res) => {
  const ans = await getAllSupplyReqs()
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'Supply inspection requests successfully fetched',
  })

  // res.status(200).json(ans)
})

//Update Supply Request Data
export const supplyReqUpdate = asyncHandler(async (req, res) => {
  const ans = await updateSupplyReqById(req.params.id, req.body)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'Supply inspection request successfully updated',
  })
  // res.send(ans)
})

//Delete A Supply Request
export const supplyReqDelete = asyncHandler(async (req, res) => {
  const ans = await deleteSupplyReqById(req.params.id)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'Supply inspection request successfully created',
  })
  // res.send(ans)
})
