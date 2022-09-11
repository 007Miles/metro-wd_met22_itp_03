import express from 'express'
import {singleProductCreate, getAproduct} from '../controllers/productController.js'
const productRouter = express.Router()

productRouter.get('/', (req, res) => {
    res.json({msg: 'GET all products'})
 })

productRouter.get('/:id', getAproduct )
 
productRouter.post('/', singleProductCreate)
 
productRouter.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a single products'})
})

productRouter.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a single products'})
})
export default productRouter