import express from 'express'
//import sampleRouter from './sample.js'
import schedule_router from './Schedules.js'

const router = express.Router()

//router.use('/sample', sampleRouter)
//  console.log('inside index.routes')
//  res.status(200).json({ status: 'works' })

router.use('/schedules', schedule_router)

export default router
