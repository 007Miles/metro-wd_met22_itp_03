import express from 'express'
const router = express.Router()
import{  
    markAttendance,
    getattencdance,
}from '../controllers/AttendancesController.js'


router.post('/attendance',markAttendance) 
router.get('/attendance/:id' ,getattencdance)

export default router;

//632232063a86b22fa0eafa09