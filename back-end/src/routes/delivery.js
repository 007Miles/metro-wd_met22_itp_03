import express from 'express'

import { viewDelivery, createDelivery } from '../controllers/delivery.js'

const sampleRouter = express.Router()

sampleRouter.post('/create', createDelivery)
sampleRouter.get('/:id', viewDelivery)

export default sampleRouter
