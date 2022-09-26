import express from 'express'
import { celebrate, Segments } from 'celebrate'

const router = express.Router()
import {
  courierRegister,
  getcourier,
  deleteCourier,
  updateCourier,
} from '../controllers/courier.js'

import { createcourierSchema } from '../validations/courier.js'

 //router.post('/registration', courierRegister)
 router.get('/:id', getcourier)
 router.put('/:id', updateCourier)
 router.delete('/:id', deleteCourier)

 router.post('/registration', celebrate({ [Segments.BODY]: createcourierSchema }), courierRegister)

 export default router
