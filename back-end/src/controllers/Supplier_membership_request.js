import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import {
  addMembership,
  getMembershipReqById,
  getAllMembershipReqs,
  updateMembershipReqById,
  deleteMembershipReqById,
} from '../services/Supplier_membership_request.js'

//Add new schedule
export const newMembership = asyncHandler(async (req, res) => {
  const ans = await addMembership(req.body)
  //console.log('Controller testing', ans)
  // res.send(ans)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    message: 'Supplier membership request sent',
  })
})

//Get one supplier membership request
export const membershipGet = asyncHandler(async (req, res) => {
  const ans = await getMembershipReqById(req.params.id)

  res.status(200).json(ans)
})

//Get all membership requests
export const allMembershipGet = asyncHandler(async (req, res) => {
  const ans = await getAllMembershipReqs()

  res.status(200).json(ans)
})

//Update membership request
export const membershipUpdate = asyncHandler(async (req, res) => {
  const ans = await updateMembershipReqById(req.params.id, req.body)
  res.send(ans)
})

//Delete membership request
export const deleteMembership = asyncHandler(async (req, res) => {
  const ans = await deleteMembershipReqById(req.params.id)
  res.send(ans)
})
