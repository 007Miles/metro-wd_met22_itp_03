import Product from '../models/productModel.js'
import mongoose from 'mongoose'

//create product
export const createProduct = async (
  name,
  measurement,
  markupPrice,
  storageCondition,
  type,
  description
) => {
  try {
    const productRepo = new Product({
      name,
      measurement,
      markupPrice,
      storageCondition,
      type,
      description,
    })
    await productRepo.save()
    return { msg: 'product added' }
  } catch (error) {
    return { msg: 'error' }
  }
}

//get single product
export const getSingleProduct = async (id) => {
  return await Product.findById(mongoose.Types.ObjectId(id))
}
