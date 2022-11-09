import express from 'express'
import { celebrate, Segments } from 'celebrate'

import { createDriver } from '../controllers/driver.js'
import { createDriverSchema } from '../validations/driver.js'

const driverRouter = express.Router()

driverRouter.post('/create', celebrate({ [Segments.BODY]: createDriverSchema }), createDriver)
// sampleRouter.post('/create', celebrate({ [Segments.BODY]: createDeliverySchema }), createDelivery)

export default driverRouter
