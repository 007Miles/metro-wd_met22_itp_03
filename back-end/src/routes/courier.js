import express from 'express'
const router = express.Router()
import {
  courierRegister,
  getcourier,
  deleteCourier,
  updateCourier,
} from '../controllers/courier.js'

 router.post('/registration', courierRegister)
 router.get('/:id', getcourier)
 router.put('/:id', updateCourier)
 router.delete('/:id', deleteCourier)

 export default router
