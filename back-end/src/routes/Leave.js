import express from 'express'
const router = express.Router()
import{  
    createleave,
    getleave,
    putleave,
    deleteleave,
}from '../controllers/leave.js'


router.post('/leave',createleave) 
router.get('/leave/:id',getleave)
router.put('/leave/:id',putleave)
router.delete('/leave/:id',deleteleave)

export default router

//632232063a86b22fa0eafa09