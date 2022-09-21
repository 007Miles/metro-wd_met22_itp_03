import express from 'express'
//import sampleRouter from './sample.js'
import membership_router from './Supplier_membership_request.js'
import deliveryRouter from './delivery.js'

const router = express.Router()

//router.use('/sample', sampleRouter)
//  console.log('inside index.routes')
//  res.status(200).json({ status: 'works' })

router.use('/request', membership_router)

router.use('/delivery', deliveryRouter)

export default router
