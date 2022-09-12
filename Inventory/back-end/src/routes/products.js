import express from 'express'
import {
  singleProductCreate,
  getAproduct,
  singleProductDelete,
  singleProductUpdate,
} from '../controllers/productController.js'
const productRouter = express.Router()

productRouter.get('/', (req, res) => {
  res.json({ msg: 'GET all products' })
})

productRouter.get('/:id', getAproduct)

productRouter.post('/', singleProductCreate)

productRouter.delete('/:id', singleProductDelete)

productRouter.patch('/:id', singleProductUpdate)

export default productRouter
