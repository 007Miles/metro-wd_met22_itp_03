import express from 'express'
const router = express.Router()
import {
  buyerRegister,
  getbuyer,
  deleteBuyer,
  updateBuyer,
} from '../controllers/buyer.js'

router.post('/Buyer/registration', buyerRegister)
router.get('/Buyer/:id', getbuyer)
router.put('/Buyer/:id', updateBuyer)
router.delete('/Buyer/:id', deleteBuyer)

export default router
