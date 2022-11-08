import { celebrate, Segments } from 'celebrate'
import express from 'express'
import { roleRegister, getRole, getRoles, updateRole } from '../controllers/role.js'
const router = express.Router()

router.post('/addRole', roleRegister) //postman link
router.get('/viewAllRoles', getRoles) 
router.get('/viewRole/:id', getRole) 
router.patch('/updateRole/:id', updateRole)


export default router
