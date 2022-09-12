import asyncHandler from '../middleware/async.js'
import { addSupplier, getSupplierById } from '../services/sample.js'

export const supplierAdd = asyncHandler(async (req, res) => {
  await addSupplier(req.body)

  res.status(200).json({ msg: 'Supplier inserted' })
})

export const supplierGet = asyncHandler(async (req, res) => {
  const ans = await getSupplierById(req.params.id)

  res.status(200).json(ans)
})
