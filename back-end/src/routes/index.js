import express from 'express'
import sampleRouter from './sample.js'
import att from './Attendances.js'

const router = express.Router()

router.use('/sample', sampleRouter)
router.use('/AttendancesController', att)
//  console.log('inside index.routes')
//  res.status(200).json({ status: 'works' })

export default router
