import {
  insertSupplier,
  getSupplier,
  deleteSupplierusingId,
  updateSupplierusingId,
  getSuppliers,
  checkSupplier,
} from '../repository/supplier.js'

//Insert A New Supplier
export const addSupplier = async ({
  business_name,
  cred_id,
  address,
  email,
  phone,
  registered_products,
  rating,
}) => {
  const details = {
    business_name,
    cred_id,
    address,
    email,
    phone,
    registered_products,
    rating,
  }
  const ans = await insertSupplier(details)
  // console.log('await for add supplier details')
  return ans.msg
}

//Get Data Of One Supplier
export const checkSupplierById = async (id) => {
  return await checkSupplier(id)
}

//Get Data Of One Supplier
export const getSupplierById = async (id) => {
  return await getSupplier(id)
}

//Get Data Of All Suppliers
export const getAllSuppliers = async () => {
  return await getSuppliers()
}

//Update Supplier Data
export const updateSupplierById = async (id, ob) => {
  // console.log('Changing Supplier data:', ob)
  const ans = await updateSupplierusingId(id, ob)
  return ans
}

//Delete A Supplier
export const deleteSupplierById = async (id) => {
  return await deleteSupplierusingId(id)
}
