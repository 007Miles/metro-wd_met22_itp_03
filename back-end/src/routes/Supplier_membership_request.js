import express from 'express'
import { celebrate, Segments } from 'celebrate'
import {
  newMembership,
  membershipGet,
  allMembershipGet,
  membershipUpdate,
  deleteMembership,
} from '../controllers/Supplier_membership_request.js'
import { createSupMembershipSchema } from '../validations/Supplier_membership_request.js'

const router = express.Router()

//create supplier membership request
router.post(
  '/membership',
  celebrate({ [Segments.BODY]: createSupMembershipSchema }),
  newMembership
)

//Get one supplier membership request
router.get('/getMembership/:id', membershipGet)

//Get all membership requests
router.get('/getAllMembership', allMembershipGet)

//Update membership request
router.put('/updateMembership/:id', membershipUpdate)

//Delete membership request
router.delete('/delMembership/:id', deleteMembership)

export default router
