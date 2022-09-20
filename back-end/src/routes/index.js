import express from 'express'

import samplceRouter from './Leave.js'

const router = express.Router()

//  console.log('inside index.routes')
//router.use('/sample', sampleRouter)
router.use('/leaveReq',samplceRouter)
//  res.status(200).json({ status: 'works' })

import deliveryRouter from './delivery.js'



router.use('/delivery', deliveryRouter)


export default router
