import express from 'express'

import { supplierAdd, supplierGet } from '../controllers/sample.js'

const sampleRouter = express.Router()

sampleRouter.post('/add', supplierAdd)
sampleRouter.get('/view/:id', supplierGet)

export default sampleRouter
