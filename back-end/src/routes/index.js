import express from 'express'

import deliveryRouter from './delivery.js'

import batchRouter from './batch.js'

import productRouter from './products.js'

const router = express.Router()

router.use('/delivery', deliveryRouter)

router.use('/batch', batchRouter)

router.use('/product', productRouter)

export default router
