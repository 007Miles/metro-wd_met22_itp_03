import express from 'express'

import { sample } from '../controllers/sample.js'

const sampleRouter = express.Router()

sampleRouter.get('/', sample)

export default sampleRouter
