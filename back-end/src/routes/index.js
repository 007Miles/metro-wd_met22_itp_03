import express from 'express'
import sampleRouter from './sample.js'
import buyerAccount from './buyerAccount.js'

const router = express.Router()

router.use('/sample', sampleRouter)
router.use('/Buyer', buyerAccount)

export default router
