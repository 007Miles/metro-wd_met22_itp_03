import { createProduct, getSingleProduct } from '../repository/productRepo.js'

export const createProductSrc = async ({
  name,
  measurement,
  markupPrice,
  storageCondition,
  type,
  description,
}) => {
  return await createProduct(
    name,
    measurement,
    markupPrice,
    storageCondition,
    type,
    description
  )
}

export const getSingleProductSrc = async (id) => {
  return await getSingleProduct(id)
}
