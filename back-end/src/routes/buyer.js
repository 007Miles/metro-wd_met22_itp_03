import express from "express";
const router=express.Router();
import {buyerRegister,getbuyer} from "../controllers/buyer.js";

router.post("/Buyer/registration",buyerRegister);
router.get("/Buyer/:id",getbuyer);

export default router;