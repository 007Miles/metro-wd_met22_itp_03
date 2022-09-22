import express from 'express'

import {
  supplierAdd,
  supplierGet,
  deleteSupplier,
  updateSupplier,
  suppliersGet,
  supplierCheck,
} from '../controllers/supplier.js'
import { celebrate, Segments } from 'celebrate'
import {
  addSupplierSchema,
  viewSupplierSchema,
  updateSupplierSchema,
  deleteSupplierSchema,
} from '../validations/supplier.js'
// import supplier from '../models/supplier.js'

const router = express.Router()

//Insert A New Supplier
router.post(
  '/addSupplier',
  celebrate({ [Segments.BODY]: addSupplierSchema }),
  supplierAdd
)

//Get Data Of One Supplier
router.get(
  '/viewSupplier/:supplier_id',
  celebrate({ [Segments.PARAMS]: viewSupplierSchema }),
  // supplierCheck,
  supplierGet
)

//Get Data Of All Suppliers
router.get('/viewAllSuppliers', suppliersGet)

//Update Supplier Data
router.put(
  '/putSupplier/:supplier_id',
  celebrate({ [Segments.PARAMS]: updateSupplierSchema }),
  updateSupplier
)

//Delete A Supplier
router.delete('/deleteSupplier/:supplier_id', deleteSupplier)

export default router
