import {
  insertSupply,
  getSupply,
  deleteSupplyusingId,
  updateSupplyusingId,
  getSupplies,
} from '../repository/supplyReq.js'

//Insert A New Supplier
export const addSupply = async ({
  description,
  supply_id,
  priority,
  status,
}) => {
  const details = {
    description,
    supply_id,
    priority,
    status,
  }
  const ans = await insertSupply(details)
  return ans.msg
}

//Get Data Of One Supplier
export const getSupplyById = async (id) => {
  return await getSupply(id)
}

//Get Data Of All Suppliers
export const getAllSupplies = async () => {
  return await getSupplies()
}

//Update Supplier Data
export const updateSupplyById = async (id, ob) => {
  console.log('Changing Supplier data:', ob)
  const ans = await updateSupplyusingId(id, ob)
  return ans
}

//Delete A Supplier
export const deleteSupplyById = async (id) => {
  return await deleteSupplyusingId(id)
}
