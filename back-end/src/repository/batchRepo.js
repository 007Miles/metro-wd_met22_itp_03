import Batch from '../models/batchModel.js'
import mongoose from 'mongoose'

//create product
export const createBatch = async (
  prod_Name,
  warehouse_id,
  quantity,
  exp_date,
  manu_date,
  arrived_date,
  supplier_Name,
  buy_price,
  sell_price
) => {
  const batchRepo = new Batch({
    prod_Name,
    warehouse_id,
    quantity,
    exp_date,
    manu_date,
    arrived_date,
    supplier_Name,
    buy_price,
    sell_price,
  })
  await batchRepo.save()
  return { msg: 'batch added' }
}

//getAllBatch
export const getAllBatch = async () => {
  return await Batch.find()
}

//getSingleBatch
export const getSingleBatch = async (id) => {
  return await Batch.findById(mongoose.Types.ObjectId(id))
}

//delete single batch
export const deleteSingleBatch = async (id) => {
  return await Batch.findByIdAndDelete(id)
}

//update single batch
export const updateSingleBatch = async (id, bt) => {
  const updateBatchRepo = await Batch.findByIdAndUpdate(id, bt, {
    new: true,
  })
  return updateBatchRepo
}

export const getBatches = async (filter) => {
  return await Batch.find(filter).lean()
}
