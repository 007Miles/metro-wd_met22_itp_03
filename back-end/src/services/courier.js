import {
    createCourierAccount,
    getCourierAccount,
    updateCourierusingId,
    deleteCourierusingId,
    
  } from '../repository/courier.js'
  
  export const addCourier = async ({
    businessName,
    address,
    phone,
    email,
    credentialId,
    transportConditions,
    OperationalArea,

  }) => {
    const details = {
      businessName,
      address,
      phone: Number(phone),
      email,
      credentialId,
      transportConditions,
      OperationalArea,

    }
    const y = await createCourierAccount(details)
    console.log('this is services file await', y)
    return y.msg
  }
  
  export const getCourierById = async (id) => {
    return await getCourierAccount(id)
  }

  export const updateCourierById = async (id, ob) => {
    //   const details = {
    //     businessName,
    //     address,
    //     phone: Number(phone),
    //     email,
    //     credentialId,
    //   }
    console.log(ob)
    const ans = await updateCourierusingId(id, ob)
    return ans
  }

  export const deleteCourierById = async (id) => {
    return await deleteCourierusingId(id)
  }