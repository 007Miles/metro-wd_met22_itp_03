import asyncHandler from '../middleware/async.js';
import {addBuyer,getBuyerById} from "../services/buyer.js";


export const buyerRegister=asyncHandler((req,res)=>{
    const ans=addBuyer(req.body);
    res.send({"msg":ans.msg});  //meka yanne na  
})

export const getbuyer=asyncHandler((req,res)=>{
    const ans=getBuyerById(req.params.id);
    const ans2=JSON.stringify(ans)
    res.json(ans2);
})

