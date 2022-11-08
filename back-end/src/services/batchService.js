import {
  createBatch,
  getAllBatch,
  getSingleBatch,
  deleteSingleBatch,
  updateSingleBatch,
  //removeBatch,
} from '../repository/batchRepo.js'

export const createBatchSrc = async ({
  prod_Name,
  warehouse_id,
  quantity,
  exp_date,
  manu_date,
  arrived_date,
  supplier_Name,
  buy_price,
  sell_price,
}) => {
  return await createBatch(
    prod_Name,
    warehouse_id,
    quantity,
    exp_date,
    manu_date,
    arrived_date,
    supplier_Name,
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
  return await deleteSingleBatch(id, bt)
}

export const updateSingleBatchSrc = async (id, body) => {
  return await updateSingleBatch(id, body)
}

export const removeBatchFromInvSrc = async (id) => {
  const batch = getSingleBatch({ id })
  if (batch == null) return false
  else {
    return await deleteSingleBatch(id)
  }
}
