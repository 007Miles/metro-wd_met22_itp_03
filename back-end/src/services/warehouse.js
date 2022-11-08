import { createWarehouse, getWarehouseAccount, getWarehouses, updateWarehouseAccount, deleteWarehouseAccount } from '../repository/warehouse.js'

//Add New Warehouse
export const addWarehouse = async ({ wareId, address, phone, storageCond }) => {

  const details = { wareId, address, phone: Number(phone), storageCond }

  const b = await createWarehouse(details)
  // console.log('await', b)
  return b.msg
}

//Get one Warehouse Details
export const getWarehouseById = async (id) => {
  return await getWarehouseAccount(id)
}

//Get All Warehouse Details
export const getAllWarehouses = async () => {
  return await getWarehouses()
}

//Update Warehouse Details
export const updatwarehouseById = async (id, ob) => {
  // console.log(ob)
  const a = await updateWarehouseAccount(id, ob)
  return a
}

//Delete Warehouse
export const deleteWarehouseById = async (id) => {
  return await deleteWarehouseAccount(id)
}