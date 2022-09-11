import buyerAccountSchema from "../models/buyer.js";


export const createBuyerAccount=async (details)=>{
    const buyerAcc=new buyerAccountSchema({
        businessName:details.businessName,
        address:details.address,
        phone:details.phone,
        email:details.email,
        credentialId:details.credentialId
    })
    buyerAcc.save()
    .then(()=>{
        console.log("data inserted"); 
    })
    .catch((err)=>{
        console.log("Error insertion failed",err);
    });
}

export const getBuyerAccount=async(id)=>{
    await buyerAccountSchema.findById(id)
    .then((buyer)=>{
        return buyer;
    })
    .catch((err)=>{
        console.log(err);
    })
}