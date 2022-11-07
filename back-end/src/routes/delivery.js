import express from 'express'
import { celebrate, Segments } from 'celebrate'

import { viewDelivery, createDelivery } from '../controllers/delivery.js'
import { createDeliverySchema, viewDeliverySchema } from '../validations/delivery.js'

const sampleRouter = express.Router()

sampleRouter.post('/create', celebrate({ [Segments.BODY]: createDeliverySchema }), createDelivery)
sampleRouter.get('/:delivery_id', celebrate({ [Segments.PARAMS]: viewDeliverySchema }) , viewDelivery)

export default sampleRouter
