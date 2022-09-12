import Supplier from '../models/supplier.js'
import mongoose from 'mongoose'

export const insertSupplier = async (details) => {
  const supplier = new Supplier({
    business_name: details.business_name,
    cred_id: details.cred_id,
    address: details.address,
    email: details.email,
    phone: details.phone,
    registered_products: details.registered_products,
  })
  await supplier.save()
}

export const getSupplier = async (id) => {
  return await Supplier.findById(mongoose.Types.ObjectId(id))
}

// export const viewAns = async (name) => {
//     const result = await Sample.findOne({ filer: { name } }).lean()

//     return result
//   }
