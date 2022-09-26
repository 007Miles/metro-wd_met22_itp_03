import asyncHandler from '../middleware/async.js'
import { mailSupplier } from '../services/mailSupplier.js'

//Send supplier membership request response
export const supplierMailer = asyncHandler(async (req, res) => {
  const ans = await mailSupplier(req.body)

  res.status(200).json(ans)
})
