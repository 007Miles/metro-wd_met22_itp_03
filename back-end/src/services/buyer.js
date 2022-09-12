import {
  createBuyerAccount,
  getBuyerAccount,
  deleteBuyerusingId,
  updateBuyerusingId,
} from '../repository/buyer.js'

export const addBuyer = async ({
  businessName,
  address,
  phone,
  email,
  credentialId,
}) => {
  const details = {
    businessName,
    address,
    phone: Number(phone),
    email,
    credentialId,
  }
  const y = await createBuyerAccount(details)
  console.log('this is services file await', y)
  return y.msg
}

export const getBuyerById = async (id) => {
  return await getBuyerAccount(id)
}

export const updateBuyerById = async (id, ob) => {
  //   const details = {
  //     businessName,
  //     address,
  //     phone: Number(phone),
  //     email,
  //     credentialId,
  //   }
  console.log(ob)
  const ans = await updateBuyerusingId(id, ob)
  return ans
}

export const deleteBuyerById = async (id) => {
  return await deleteBuyerusingId(id)
}
