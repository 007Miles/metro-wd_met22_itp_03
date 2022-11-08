import express from 'express'
import { celebrate, Segments } from 'celebrate'

import {
  singleProductCreate,
  getAproduct,
  getAllProduct,
  singleProductDelete,
  singleProductUpdate,
} from '../controllers/productController.js'

import { addProductSchema } from '../validations/productValidate.js'

const productRouter = express.Router()

productRouter.get('/getAllProducts', getAllProduct)

productRouter.get('/getAProduct/:id', getAproduct)

productRouter.post(
  '/createProduct',
  celebrate({ [Segments.BODY]: addProductSchema }),
  singleProductCreate
)

productRouter.delete('/deleteProduct/:id', singleProductDelete)

productRouter.patch('/updateProduct/:id', singleProductUpdate)

export default productRouter
