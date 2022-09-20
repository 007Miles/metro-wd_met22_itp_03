import express from 'express'
import { newMembership } from '../controllers/Supplier_membership_request.js'

const router = express.Router()

router.post('/membership', newMembership) //create schedules

export default router
