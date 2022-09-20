import {
  createBatch,
  getAllBatch,
  getSingleBatch,
  deleteSingleBatch,
  updateSingleBatch,
} from '../repository/batchRepo.js'

export const createBatchSrc = async ({
  prod_id,
  quantity,
  exp_date,
  manu_date,
  arrived_date,
  supplier_id,
  buy_price,
  sell_price,
}) => {
  return await createBatch(
    prod_id,
    quantity,
    exp_date,
    manu_date,
    arrived_date,
    supplier_id,
    buy_price,
    sell_price
  )
}

export const getSingleBatchSrc = async (id) => {
  return await getSingleBatch(id)
}

export const getAllBatchSrc = async () => {
  return await getAllBatch()
}

export const deleteSingleBatchSrc = async (id, bt) => {
  console.log('Service')
  return await deleteSingleBatch(id, bt)
}

export const updateSingleBatchSrc = async (id, body) => {
  return await updateSingleBatch(id, body)
}
