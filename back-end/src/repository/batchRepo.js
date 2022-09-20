import Batch from '../models/batchModel.js'
import mongoose from 'mongoose'

//create product
export const createBatch = async (
  prod_id,
  quantity,
  exp_date,
  manu_date,
  arrived_date,
  supplier_id,
  buy_price,
  sell_price
) => {
  try {
    const batchRepo = new Batch({
      prod_id,
      quantity,
      exp_date,
      manu_date,
      arrived_date,
      supplier_id,
      buy_price,
      sell_price,
    })
    await batchRepo.save()
    return { msg: 'batch added' }
  } catch (error) {
    return { msg: error.message }
  }
}

//getAllBatch
export const getAllBatch = async () => {
  return await Batch.find()
}

export const getSingleBatch = async (id) => {
  return await Batch.findById(mongoose.Types.ObjectId(id))
}
/*
//new
export const getSingleBatch = async (id) => {
  const newProdId = Batch.find({ prod_id: id })
    .sort({ arrived_date: 1 })
    .populate({ path: 'prod_id', select: ['prod_id'] })
    .populate('prod_id')
  return await Batch.findById(mongoose.Types.ObjectId(id))
}
*/
//delete single batch
export const deleteSingleBatch = async (id) => {
  console.log('Repo ')
  return await Batch.findByIdAndDelete(id)
}

//update single batch
export const updateSingleBatch = async (id, bt) => {
  try {
    const updateBatchRepo = await Batch.findByIdAndUpdate(id, bt, {
      new: true,
    })
    return updateBatchRepo
  } catch (error) {
    return { error: 'No such batch' }
  }
}

console.log('Repo ')
