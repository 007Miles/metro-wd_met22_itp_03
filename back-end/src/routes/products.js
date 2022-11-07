import express from 'express'
import { celebrate, Segments } from 'celebrate'

import {
  singleProductCreate,
  getAproduct,
  getAllProducts,
  singleProductDelete,
  singleProductUpdate,
} from '../controllers/productController.js'

const productRouter = express.Router()

productRouter.get('/getAllProducts', getAllProducts)

productRouter.get('/getAProduct/:id', getAproduct)

productRouter.post('/createProduct', singleProductCreate)

productRouter.delete('/deleteProduct/:id', singleProductDelete)

productRouter.patch('/updateProduct/:id', singleProductUpdate)

export default productRouter
