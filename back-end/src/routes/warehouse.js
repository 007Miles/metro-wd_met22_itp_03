import { celebrate, Segments } from 'celebrate'
import express from 'express'
import { warehouseRegister, getWarehouse, getWarehouses, updateWarehouse, deleteWarehouse } from '../controllers/warehouse.js'
import { createwarehouseSchema } from '../validations/warehouse.js'
const router = express.Router()

router.post('/addWarehouse',celebrate({[Segments.BODY]:createwarehouseSchema}), warehouseRegister) //postman link
router.get('/viewAllWarehouses', getWarehouses)
router.get('/viewWarehouse/:id', getWarehouse)
router.put('/updateWarehouse/:id', updateWarehouse)
router.delete('/deleteWarehouse/:id', deleteWarehouse)

export default router
