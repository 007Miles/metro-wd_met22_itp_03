import express from 'express'

import sampleRouter from './supplier.js'

import deliveryRouter from './delivery.js'

const router = express.Router()

router.use('/delivery', deliveryRouter)

export default router
