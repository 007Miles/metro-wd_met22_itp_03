import express from 'express'

import { supplierAdd, supplierGet } from '../controllers/sample.js'

const sampleRouter = express.Router()

sampleRouter.get('/add', supplierAdd)
sampleRouter.get('/add', supplierGet)

export default sampleRouter
