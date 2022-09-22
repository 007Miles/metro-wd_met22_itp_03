import express from 'express'
import { celebrate, Segments } from 'celebrate'
import {
  newSchedules,
  getSchedules,
  updateSchedules,
  deleteSchedules,
} from '../controllers/Schedules.js'

import { cancelSchedule } from '../controllers/Supply_cancel.js'

import { createScheduleSchema } from '../validations/Schedules.js'

const router = express.Router()

router.post(
  '/new',
  celebrate({ [Segments.BODY]: createScheduleSchema }),
  newSchedules
) //create schedules
router.get('/:id', getSchedules) //get schedules
router.put('/:id', updateSchedules) //update schedules
router.delete('/:id', deleteSchedules) //delete schedules
router.delete('/cancel/:id', cancelSchedule) //delete schedules

export default router
