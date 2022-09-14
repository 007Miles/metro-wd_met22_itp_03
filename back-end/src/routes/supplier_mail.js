import express from 'express'

import { supplierMailer } from '../controllers/supplierMailController.js'

const router = express.Router()

//Insert A New Supplier
router.post('/send', supplierMailer)

export default router
