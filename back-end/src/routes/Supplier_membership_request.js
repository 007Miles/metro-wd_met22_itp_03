import express from 'express'
import { celebrate, Segments } from 'celebrate'
import { newMembership } from '../controllers/Supplier_membership_request.js'
import { createSupMembershipSchema } from '../validations/Supplier_membership_request.js'

const router = express.Router()

router.post(
  '/membership',
  celebrate({ [Segments.BODY]: createSupMembershipSchema }),
  newMembership
) //create schedules

export default router
