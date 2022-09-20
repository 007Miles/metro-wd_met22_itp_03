import express from 'express'

import deliveryRouter from './delivery.js'
import productRouter from './products.js'

const router = express.Router()

router.use('/delivery', deliveryRouter)
router.use('/product', productRouter)

export default router