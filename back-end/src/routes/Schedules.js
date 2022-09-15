import express from 'express'
import {
  newSchedules,
  getSchedules,
  updateSchedules,
  deleteSchedules,
} from '../controllers/Schedules.js'

const router = express.Router()

router.post('/new', newSchedules) //create schedules
router.get('/:id', getSchedules) //get schedules
router.put('/:id', updateSchedules) //update schedules
router.delete('/:id', deleteSchedules) //delete schedules

export default router
