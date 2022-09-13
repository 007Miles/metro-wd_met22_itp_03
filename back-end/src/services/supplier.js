import { insertSupplier, getSupplier } from '../repository/supplier.js'

export const addSupplier = async ({
  business_name,
  cred_id,
  address,
  email,
  phone,
  registered_products,
}) => {
  const details = {
    business_name,
    cred_id,
    address,
    email,
    phone,
    registered_products,
  }
  const y = await insertSupplier(details)
  console.log('await for add supplier details')
  return y.msg
}

export const getSupplierById = async (id) => {
  return await getSupplier(id)
}
