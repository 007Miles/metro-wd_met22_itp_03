import express from 'express'

import sampleRouter from './sample.js'
import buyerAccount from './buyerAccount.js'
import deliveryRouter from './delivery.js'

const router = express.Router()

router.use('/sample', sampleRouter)
router.use('/Buyer', buyerAccount)
router.use('/delivery', deliveryRouter)

export default router
