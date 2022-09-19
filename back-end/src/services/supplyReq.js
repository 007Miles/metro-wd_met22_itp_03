import {
  insertSupplyReq,
  getSupplyReq,
  deleteSupplyRequsingId,
  updateSupplyRequsingId,
  getSupplyReqs,
} from '../repository/supplyReq.js'

//Insert A New Supplier
export const addSupplyReq = async ({
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
  const ans = await insertSupplyReq(details)
  return ans.msg
}

//Get Data Of One Supplier
export const getSupplyReqById = async (id) => {
  return await getSupplyReq(id)
}

//Get Data Of All Suppliers
export const getAllSupplyReqs = async () => {
  return await getSupplyReqs()
}

//Update Supplier Data
export const updateSupplyReqById = async (id, ob) => {
  // console.log('Changing Supply data:', ob)
  const ans = await updateSupplyRequsingId(id, ob)
  return ans
}

//Delete A Supplier
export const deleteSupplyReqById = async (id) => {
  return await deleteSupplyRequsingId(id)
}
