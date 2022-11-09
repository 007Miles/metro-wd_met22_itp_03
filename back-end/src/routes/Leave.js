import { celebrate, Segments } from 'celebrate'
import express from 'express'
const router = express.Router()
import{  
    createleave,
    getleave,
    putleave,
    deleteleave,
    getleaves,
}from '../controllers/leave.js'
import { addLeaveSchema } from '../validations/leave.js'


// router.post(
//     '/leave',
//     celebrate({[Segments.BODY]: addLeaveSchema}),
//     createleave
// )

router.post('/leave', celebrate({ [Segments.BODY]: addLeaveSchema }), createleave)

//router.post('/leave',createleave) 
router.get('/viewAllLeaves', getleaves)
router.get('/leave/:id',getleave)
router.put('/leave/:id',putleave)
router.delete('/leave/:id',deleteleave)

export default router

//632232063a86b22fa0eafa09