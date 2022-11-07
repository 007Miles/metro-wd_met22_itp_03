import express from 'express'
const router = express.Router()
import{  
    markAttendance,
    getattencdance,
    updateAttendance,
}from '../controllers/attendance.js'

router.post('/attendance',markAttendance) 
router.get('/attendance/:id' ,getattencdance)
router.patch('/attendance/:id',updateAttendance)

export default router;