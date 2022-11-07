import { useEffect, useState } from 'react'

import '../styles/supplierList.css'
// import SupplierView from '../components/supplier/supplierView'
import InspecReqViews from '../components/supplier/inspecReqView'
// import SupplierAddForm from "../components/supplierAddForm";

const InspecReqList = () => {
  // const [supplierList, setSupplierList] = useState(null)
  const [inspecReqList, setInspecReqList] = useState(null)

  // useEffect(() => {
  //   const fetchSuppliers = async () => {
  //     const response = await fetch(
  //       'http://localhost:4000/api/supplier/viewAllSuppliers'
  //     )
  //     const json = await response.json()
  //     if (response.ok) {
  //       setSupplierList(json.data)
  //       console.log(json)
  //     }
  //   }
  //   fetchSuppliers()
  // }, [])

  useEffect(() => {
    const fetchInspecReqList = async () => {
      const response = await fetch(
        'http://localhost:4000/api/supplyReq/viewAllSupplyReq'
      )
      const json = await response.json()
      if (response.ok) {
        setInspecReqList(json.data)
        // console.log(json)
      }
    }
    fetchInspecReqList()
  }, [])

  return (
    <div className="home">
      <div className="supplierList">
        {inspecReqList &&
          inspecReqList.map((inspecRequest) => (
            <InspecReqViews
              key={inspecRequest._id}
              inspecRequest={inspecRequest}
            />
            //   <p key={supplier._id}>{supplier.bussiness_id}</p>
          ))}
      </div>
      {/* <SupplierAddForm /> */}
    </div>
  )
}
export default InspecReqList
