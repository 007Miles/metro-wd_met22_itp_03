import asyncHandler from '../middleware/async.js'
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

  res.status(200).json(ans)
})

//Get Data Of One Supply Request
export const supplyReqGet = asyncHandler(async (req, res) => {
  const ans = await getSupplyReqById(req.params.id)

  res.status(200).json(ans)
})

//Get Data Of All Supply Requests
export const suppliesReqGet = asyncHandler(async (req, res) => {
  const ans = await getAllSupplyReqs()

  res.status(200).json(ans)
})

//Update Supply Request Data
export const supplyReqUpdate = asyncHandler(async (req, res) => {
  const ans = await updateSupplyReqById(req.params.id, req.body)
  res.send(ans)
})

//Delete A Supply Request
export const supplyReqDelete = asyncHandler(async (req, res) => {
  const ans = await deleteSupplyReqById(req.params.id)
  res.send(ans)
})
