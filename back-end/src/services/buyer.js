import {createBuyerAccount,getBuyerAccount} from "../repository/buyer.js";


export const addBuyer=async ({businessName,address,phone,email,credentialId})=>{
    const details={
        "businessName":businessName,
        "address":address,
        "phone":Number(phone),
        "email":email,
        "credentialId":credentialId
    }
    await createBuyerAccount(details)
    .then(()=>{
        return {msg:"account created"}
    })
    .catch((err)=>{
        return {msg:"account not created"}
    })
}

export const getBuyerById=async({id})=>{
    const buyer=await getBuyerAccount(id);
    return buyer;
}