import express from 'express'
import { newSchedules } from '../controllers/Schedules.js'

const router = express.Router()

//create schedule
router.post('/schedules/new', newSchedules)

export default router
