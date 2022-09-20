import {
  insertBuyerDetails,
  readSpecificBuyerDetails,
  updateBuyer,
  deleteBuyer,
} from '../repository/buyerAccount.js'

export const addBuyerDetails = async ({
  businessName,
  email,
  phone,
  address,
  address_line2,
  city,
  credentialId,
}) => {
  const details = {
    businessName,
    email,
    phone,
    address,
    address_line2,
    city,
    credentialId,
  }
  return await insertBuyerDetails(details)
}

export const getSpecificBuyerDetails = async (id) => {
  return await readSpecificBuyerDetails(id)
}

export const updateBuyerDetails = async (id, ob) => {
  return await updateBuyer(id, ob)
}

export const deleteBuyerDetails = async (id) => {
  return await deleteBuyer(id)
}
