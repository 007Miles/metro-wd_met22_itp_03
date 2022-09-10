import express from 'express'

import { sampleAdd } from '../controllers/sample.js'

const sampleRouter = express.Router()

sampleRouter.get('/add', sampleAdd)

export default sampleRouter
