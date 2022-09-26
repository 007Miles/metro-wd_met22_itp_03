import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import { addMembership } from '../services/Supplier_membership_request.js'

//Add new schedule
export const newMembership = asyncHandler(async (req, res) => {
  const ans = await addMembership(req.body)
  //console.log('Controller testing', ans)
  // res.send(ans)
  return makeResponse({
    res,
    status: 206,
    data: ans,
    message: 'Supplier membership request sent',
  })
})
