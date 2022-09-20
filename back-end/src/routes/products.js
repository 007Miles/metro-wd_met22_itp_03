import express from 'express'
import { celebrate, Segments } from 'celebrate'

import {
  singleProductCreate,
  getAproduct,
  singleProductDelete,
  singleProductUpdate,
} from '../controllers/productController.js'
import { addProductSchema } from '../validations/productValidate.js'

const productRouter = express.Router()

productRouter.get('/', (req, res) => {
  res.json({ msg: 'GET all products' })
})

productRouter.get('/:id', getAproduct)

productRouter.post(
  '/',
  celebrate({ [Segments.PARAMS]: addProductSchema }),
  singleProductCreate
)

productRouter.delete('/:id', singleProductDelete)

productRouter.patch('/:id', singleProductUpdate)

export default productRouter
