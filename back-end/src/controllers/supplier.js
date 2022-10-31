import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'

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
  return makeResponse({
    res,
    status: 201,
    data: ans,
    massage: 'Supplier successfully created',
  })
  // res.status(200).json(ans)
})

//Get Data Of One Supplier
export const supplierGet = asyncHandler(async (req, res) => {
  const ans = await getSupplierById(req.params.supplier_id)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'Supplier detail successfully fetched',
  })

  // res.status(200).json(ans)
})

//Get Data Of All Suppliers
export const suppliersGet = asyncHandler(async (req, res) => {
  const ans = await getAllSuppliers()
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'Suppliers successfully fetched',
  })
  // res.status(200).json(ans)
})

//Update Supplier Data
export const updateSupplier = asyncHandler(async (req, res) => {
  const ans = await updateSupplierById(req.params.supplier_id, req.body)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'Supplier successfully updated',
  })
  // res.send(ans)
})

//Delete A Supplier
export const deleteSupplier = asyncHandler(async (req, res) => {
  const ans = await deleteSupplierById(req.params.supplier_id)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'Supplier successfully deleted',
  })
  // res.send(ans)
})
