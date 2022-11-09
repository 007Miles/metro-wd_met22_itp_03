import Product from '../models/productModel.js'
import Batch from '../models/batchModel.js'
export const getAllBuyerProductSrc = async (params) => {
  try {
    let filter = {}
    if (params.name) {
      filter.name = { $regex: params.name, $options: 'i' }
    }

    const a = await Product.find(filter).sort({ createdAt: -1 })
    console.log(a)
    return a
  } catch (error) {
    return { msg: 'no products found' }
  }
}

//getAllBatch
export const getAllBatch = async (params) => {
  try {
    let filter = {}
    if (params.name) {
      filter.prod_Name = { $regex: params.name, $options: 'i' }
    }

    const a = await Batch.find(filter).sort({ createdAt: -1 })
    console.log(a)
    return a
  } catch (error) {
    console.log(error)
    return { msg: 'no products2 found', error }
  }
}
