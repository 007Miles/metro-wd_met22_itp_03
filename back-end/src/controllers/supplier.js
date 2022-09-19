import asyncHandler from '../middleware/async.js'
import {
  addSupplier,
  getSupplierById,
  deleteSupplierById,
  updateSupplierById,
  getAllSuppliers,
} from '../services/supplier.js'

//Insert A New Supplier
export const supplierAdd = asyncHandler(async (req, res) => {
  const ans = await addSupplier(req.body)

  res.status(200).json(ans)
})

//Get Data Of One Supplier
export const supplierGet = asyncHandler(async (req, res) => {
  const ans = await getSupplierById(req.params.id)

  res.status(200).json(ans)
})

//Get Data Of All Suppliers
export const suppliersGet = asyncHandler(async (req, res) => {
  const ans = await getAllSuppliers()

  res.status(200).json(ans)
})

//Update Supplier Data
export const updateSupplier = asyncHandler(async (req, res) => {
  const ans = await updateSupplierById(req.params.id, req.body)
  res.send(ans)
})

//Delete A Supplier
export const deleteSupplier = asyncHandler(async (req, res) => {
  const ans = await deleteSupplierById(req.params.id)
  res.send(ans)
})
