import express from 'express'
const router = express.Router()
import Validate from '../validations/buyerValidator.js'
import {
  createAccount,
  viewAccount,
  updateAccount,
  deleteAccount,
} from '../controllers/buyerAccount.js'

router.post('/createAccount', Validate, createAccount)
router.get('/viewAccount/:id', viewAccount)
router.put('/updateAccount/:id', Validate, updateAccount)
router.delete('/deleteAccount/:id', deleteAccount)

export default router
