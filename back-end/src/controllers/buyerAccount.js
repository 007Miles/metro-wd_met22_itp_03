import asyncHandler from '../middleware/async.js'
import { validationResult } from 'express-validator'
import {
  addBuyerDetails,
  getSpecificBuyerDetails,
  updateBuyerDetails,
  deleteBuyerDetails,
} from '../services/buyerAccount.js'

export const createAccount = asyncHandler(async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const ans = await addBuyerDetails(req.body)
  res.send(ans)
})

export const viewAccount = asyncHandler(async (req, res) => {
  const ans = await getSpecificBuyerDetails(req.params.id)
  res.json({
    businessName: ans.businessName,
    email: ans.email,
    mobile: ans.phone,
    address: ans.address,
    address_line2: ans.address_line2,
    city: ans.city,
  })
})

export const updateAccount = asyncHandler(async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const ans = await updateBuyerDetails(req.params.id, req.body)
  res.send(ans)
})

export const deleteAccount = asyncHandler(async (req, res) => {
  const ans = await deleteBuyerDetails(req.params.id)
  res.json(ans)
})
