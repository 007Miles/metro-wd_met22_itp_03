import express from 'express'
import { celebrate, Segments } from 'celebrate'

import { login, create } from '../controllers/auth.js'
import { loginSchema, createCredSchema } from '../validations/auth.js'

const authRouter = express.Router()

authRouter.post('/create', celebrate({ [Segments.BODY]: createCredSchema }), create) // For Dev purposes
authRouter.post('/login', celebrate({ [Segments.BODY]: loginSchema }), login) // For Dev purposes
// sampleRouter.get('/:delivery_id', celebrate({ [Segments.PARAMS]: viewDeliverySchema }) , viewDelivery)

export default authRouter