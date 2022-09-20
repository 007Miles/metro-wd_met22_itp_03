import {
  createProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
} from '../repository/productRepo.js'

export const createProductSrc = async ({
  name,
  measurement_unit,
  markupPrice,
  storageCondition,
  type,
  description,
}) => {
  return await createProduct(
    name,
    measurement_unit,
    markupPrice,
    storageCondition,
    type,
    description
  )
}

export const getSingleProductSrc = async (id) => {
  return await getSingleProduct(id)
}

export const deleteSingleProductSrc = async (id, pr) => {
  return await deleteSingleProduct(id, pr)
}

export const updateSingleProductSrc = async (id, body) => {
  return await updateSingleProduct(id, body)
}
