import Product from '../models/productModel.js'
import mongoose from 'mongoose'

//create product
export const createProduct = async (
  name,
  measurement_unit,
  markupPrice,
  storageCondition,
  type,
  description
) => {
  const productRepo = new Product({
    name,
    measurement_unit,
    markupPrice,
    storageCondition,
    type,
    description,
  })
  await productRepo.save()
  return { msg: 'product added' }
}

//get all products
export const getAllProduct = async () => {
  return await Product.find().lean()
}

//get single product
export const getSingleProduct = async (id) => {
  return await Product.findById(mongoose.Types.ObjectId(id))
}

//delete single product
export const deleteSingleProduct = async (id) => {
  return await Product.findByIdAndDelete(mongoose.Types.ObjectId(id))
}

//update single product
export const updateSingleProduct = async (id, pr) => {
  const productUpdateRepo = await Product.findByIdAndUpdate(id, pr, {
    new: true,
  })
  return productUpdateRepo
}

export const getProducts = async (filter) => {
  return await Product.find(filter).lean()
}

// export const getMarkupPrice = async (productName) => {
//   const products = await Product.find({ name: productName }).lean()
//   products.forEach((product) => {
//     console.log(product.markupPrice)
//     return product.markupPrice
//   })
// }
