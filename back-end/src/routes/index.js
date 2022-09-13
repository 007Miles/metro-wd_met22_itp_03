import express from 'express'
import sampleRouter from './supplier.js'

const router = express.Router()

router.use('/sample', sampleRouter)
//  console.log('inside index.routes')
//  res.status(200).json({ status: 'works' })

export default router
