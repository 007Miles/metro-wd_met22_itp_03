import express from 'express'

import { supplierMailer } from '../controllers/supplierMailController.js'

const router = express.Router()

//Send supplier membership request response
router.post('/send', supplierMailer)

export default router
