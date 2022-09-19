import express from 'express'

import {
  supplyReqAdd,
  supplyReqGet,
  suppliesReqGet,
  supplyReqDelete,
  supplyReqUpdate,
} from '../controllers/supply_req_controller.js'

const router = express.Router()

//Insert A New Supply request
router.post('/addSupplyReq', supplyReqAdd)

//Get Data Of One Supply request
router.get('/viewSupplyReq/:id', supplyReqGet)

//Get Data Of All Supply requests
router.get('/viewAllSupplyReq', suppliesReqGet)

//Update Supply request Data
router.put('/putSupplyReq/:id', supplyReqUpdate)

//Delete A Supply request
router.delete('/deleteSupplyReq/:id', supplyReqDelete)

export default router
