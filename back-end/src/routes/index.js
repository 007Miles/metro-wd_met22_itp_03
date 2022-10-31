import express from 'express'

import buyerAccount from './buyerAccount.js'
import deliveryRouter from './delivery.js'

const router = express.Router()

router.use('/Buyer', buyerAccount)
router.use('/delivery', deliveryRouter)

export default router
