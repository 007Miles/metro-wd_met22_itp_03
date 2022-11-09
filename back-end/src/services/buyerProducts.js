import { getAllBuyerProductSrc } from '../repository/buyerProducts.js'
import { getAllBatch } from '../repository/buyerProducts.js'

export const getAllProductSrc = async (params) => {
  return await getAllBuyerProductSrc(params)
}

export const getAllBatchSrc = async (params) => {
  return await getAllBatch(params)
}
