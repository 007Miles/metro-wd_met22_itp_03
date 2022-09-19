import mongoose from 'mongoose'
import InspectionRequest from '../models/supply_inspection_req_model.js'

//Insert A New Supply Request
export const insertSupplyReq = async (details) => {
  const inspectionRequest = new InspectionRequest({
    description: details.description,
    supply_id: details.supply_id,
    priority: details.priority,
    status: details.status,
  })
  await inspectionRequest.save()
  return { msg: 'Supply request Inserted Successfully' }
}

//Get Data Of One Supply request
export const getSupplyReq = async (id) => {
  //check supply request is available with the id
  if ((await InspectionRequest.findById(mongoose.Types.ObjectId(id))) == null) {
    return { msg: 'No supply inspection request is available with this id' }
  }
  try {
    return await InspectionRequest.findById(mongoose.Types.ObjectId(id))
  } catch (error) {
    return { msg: 'Search Supply request by id failed' }
  }
}

//Get Data Of All Supply requests
export const getSupplyReqs = async () => {
  try {
    return await InspectionRequest.find({}).sort({ createdAt: -1 })
  } catch (error) {
    return { msg: 'no supplies found' }
  }
}

//Update Supply request Data
export const updateSupplyRequsingId = async (id, ob) => {
  //check supply request is available with the id
  if ((await InspectionRequest.findById(mongoose.Types.ObjectId(id))) == null) {
    return { msg: 'No supply inspection request is available with this id' }
  }
  try {
    const res = await InspectionRequest.findById(id)
    // console.log(ob)
    Object.assign(res, ob)
    await res.save()
    return { msg: 'Supply request updated successfully' }
  } catch (error) {
    return { msg: 'Supply request update failed' }
  }
}

//Delete A Supply request
export const deleteSupplyRequsingId = async (id) => {
  //check supply request is available with the id
  if ((await InspectionRequest.findById(mongoose.Types.ObjectId(id))) == null) {
    return { msg: 'No supply inspection request is available with this id' }
  }

  try {
    await InspectionRequest.findByIdAndDelete(id)
    return { msg: 'Supply request deleted successfully' }
  } catch (error) {
    return { msg: 'Supply request deletion failed' }
  }
}
