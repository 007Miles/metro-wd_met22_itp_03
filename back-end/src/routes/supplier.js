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
router.post('/addSupplier', supplierAdd)

//Get Data Of One Supplier
router.get('/viewSupplier/:id', supplierGet)

//Get Data Of All Suppliers
router.get('/viewAllSuppliers', suppliersGet)

//Update Supplier Data
router.put('/putSupplier/:id', updateSupplier)

//Delete A Supplier
router.delete('/deleteSupplier/:id', deleteSupplier)

export default router
