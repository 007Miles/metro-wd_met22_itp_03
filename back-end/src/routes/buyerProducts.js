import express from 'express'
import { getAllProduct } from '../controllers/buyerProducts.js'
import { getAllBuyerBatchSrc } from '../controllers/buyerProducts.js'

const productRouter = express.Router()

productRouter.get('/getAllProducts', getAllProduct)
productRouter.get('/getAllBatch', getAllBuyerBatchSrc)

export default productRouter
