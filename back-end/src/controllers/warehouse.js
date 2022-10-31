import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import { addWarehouse, getWarehouseById, getAllWarehouses, updatwarehouseById, deleteWarehouseById } from '../services/warehouse.js'

//Add New Warehouse
export const warehouseRegister = asyncHandler(async (req, res) => {
  const a = await addWarehouse(req.body)
  // res.send(a)
  return makeResponse({
    res,
    status: 201,
    data: a,
    message: 'New Warehouse added',
  })
})

//Get one Warehouse Details
export const getWarehouse = asyncHandler(async (req, res) => {
  const a = await getWarehouseById(req.params.id)
  // res.json(a)
  return makeResponse({
    res,
    status: 202,
    data: a,
    message: 'Get Warehouse Details',
  })
})

//Get All Warehouse Details
export const getWarehouses = asyncHandler(async (req, res) => {
  const a = await getAllWarehouses()
  res.json(a)
})

//Update Warehouse Details
export const updateWarehouse = asyncHandler(async (req, res) => {
  const a = await updatwarehouseById(req.params.id, req.body)
  // res.send(a)
  return makeResponse({
    res,
    status: 203,
    data: a,
    message: 'Warehouse Details Updated',
  })
})

// Delete Warehouse Details
export const deleteWarehouse = asyncHandler(async (req, res) => {
  const a = await deleteWarehouseById(req.params.id)
  // res.send(a)
  return makeResponse({
    res,
    status: 204,
    data: a,
    message: 'Delete Employee Details',
  })
})

