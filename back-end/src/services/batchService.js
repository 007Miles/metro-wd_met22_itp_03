import {
  createBatch,
  getAllBatch,
  getSingleBatch,
  deleteSingleBatch,
  updateSingleBatch,
  getBatches,
  getTotalProduce,
  //removeBatch,
} from '../repository/batchRepo.js'

//import { getMarkupPrice } from '../repository/productRepo.js'

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

// export const setSellPriceSrc = async () => {
//   // const batches = await createBatchSrc()
//   const promises = batches.map((batch) => {
//     return getMarkupPrice(batch.prod_Name)
//   })
//   console.log(promises)
//   const markupPrices = await Promise.all(promises)
//   // for (var i = 0; i < batches.length; i++) {
//   //   var sellPrices = batches[i].sell_price + markupPrices
//   // }
//   // console.log(sellPrices)
//   // return sellPrices
// }
