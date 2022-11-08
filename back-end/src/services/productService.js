import {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
} from '../repository/productRepo.js'

import { getTotalProduce } from '../repository/batchRepo.js'

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

// export const getAllProductSrc = async () => {
//   return await getAllProduct()
// }

export const getAllProductSrc = async () => {
  const products = await getAllProduct()

  const promises = products.map((product) => {
    return getTotalProduce(product.name)
  })
  const quantities = await Promise.all(promises)
  for (var i = 0; i < products.length; i++) {
    products[i].quantity = quantities[i]
  }
  console.log(quantities)
  console.log(products)
  return products
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
