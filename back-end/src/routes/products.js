import express from 'express'
import { celebrate, Segments } from 'celebrate'

import {
  singleProductCreate,
  getAproduct,
  getAllProduct,
  singleProductDelete,
  singleProductUpdate,
} from '../controllers/productController.js'

const productRouter = express.Router()

productRouter.get('/', getAllProduct)

productRouter.get('/:id', getAproduct)

productRouter.post('/', singleProductCreate)

productRouter.delete('/:id', singleProductDelete)

productRouter.patch('/:id', singleProductUpdate)

export default productRouter
