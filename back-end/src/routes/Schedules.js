import express from 'express'
const Schedules = require('../models/Schedules')

const router = express.Router()

//create schedule
router.post('/schedules/new', (req, res) => {
  let newSchedule = new Schedules(req.body)
})
