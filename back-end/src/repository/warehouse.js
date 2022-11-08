import Warehouse from '../models/warehouse.js'
import mongoose from 'mongoose'

//Add New Warehouse
export const createWarehouse = async (details) => {
  console.log(details)
  try {
    const warehouse = new Warehouse({
      wareId: details.wareId,
      address: details.address,
      phone: details.phone,
      storageCond: details.storageCond,
    })

    await warehouse.save()
    return { msg: 'Account Create Succesfully' }
  } catch (error) {
    console.log(error)
    return { msg: 'Account Error' }
  }
}

//Get one Warehouse Details
export const getWarehouseAccount = async (id) => {
  return await Warehouse.findById(mongoose.Types.ObjectId(id))
}

//Get All Warehouse Details
export const getWarehouses = async () => {
  try {
    const a = await Warehouse.find().sort({ createdAt: -1 })
    console.log (a)
    return a
  } catch (error) {
    return { msg: 'no Warehouse found' }
  }
}

//Update Warehouse Details
export const updateWarehouseAccount = async (id, ob) => {
  try {
    await Warehouse.findByIdAndUpdate(id, ob)
    // return { msg: 'update successfull' }
  } catch (error) {
    // return { msg: 'update Error' }
  }
}

//Delete Warehouse Details
export const deleteWarehouseAccount = async (id) => {
  try {
    await Warehouse.findByIdAndDelete(id)
    // return { msg: 'deletion successfull' }
  } catch (error) {
    // return { msg: 'deletion not successfull' }
  }
}