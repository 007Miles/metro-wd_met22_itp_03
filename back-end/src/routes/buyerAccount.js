import express from 'express'
import { celebrate, Segments } from 'celebrate'

const router = express.Router()
import { BuyerAccountSchema } from '../validations/buyer.js'
import {
  createAccount,
  viewAccount,
  updateAccount,
  deleteAccount,
} from '../controllers/buyerAccount.js'

router.post(
  '/createAccount',
  celebrate({ [Segments.BODY]: BuyerAccountSchema }),
  createAccount
)
router.get('/viewAccount/:id', viewAccount)
router.put(
  '/updateAccount/:id',
  celebrate({ [Segments.BODY]: BuyerAccountSchema }),
  updateAccount
)
router.delete('/deleteAccount/:id', deleteAccount)

export default router
