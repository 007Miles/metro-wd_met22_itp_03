import express from 'express'

import courier_router from './courier.js'

const router = express.Router()

router.use('/courieraccount', courier_router)
// console.log('inside index.routes')
//  res.status(200).json({ status: 'works' })

import deliveryRouter from './delivery.js'



router.use('/delivery', deliveryRouter)


export default router
