import express from 'express'
import courier_router from './courier.js'

const router = express.Router()

router.use('/courieraccount', courier_router)
 // console.log('inside index.routes')
//  res.status(200).json({ status: 'works' })

export default router
