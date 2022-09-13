import express from 'express'

import {
  supplierAdd,
  supplierGet,
  deleteSupplier,
  updateSupplier,
  suppliersGet,
} from '../controllers/supplier.js'

const router = express.Router()

//Insert A New Supplier
router.post('/add', supplierAdd)

//Get Data Of One Supplier
router.get('/view/:id', supplierGet)

//Get Data Of All Suppliers
router.get('/viewAll', suppliersGet)

//Update Supplier Data
router.put('/put/:id', updateSupplier)

//Delete A Supplier
router.delete('/delete/:id', deleteSupplier)

export default router
