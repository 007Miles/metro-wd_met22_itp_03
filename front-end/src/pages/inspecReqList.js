import { useEffect, useState } from 'react'

import '../styles/supplierList.css'
import SupplierView from '../components/supplier/supplierView'
// import SupplierAddForm from "../components/supplierAddForm";

const InspecReqList = () => {
  const [supplierList, setSupplierList] = useState(null)

  useEffect(() => {
    const fetchSuppliers = async () => {
      const response = await fetch(
        'http://localhost:4000/api/supplier/viewAllSuppliers'
      )
      const json = await response.json()
      if (response.ok) {
        setSupplierList(json.data)
        console.log(json)
      }
    }
    fetchSuppliers()
  }, [])

  return (
    <div className="home">
      <div className="supplierList">
        {supplierList &&
          supplierList.map((supplier) => (
            <SupplierView key={supplier._id} supplier={supplier} />
            //   <p key={supplier._id}>{supplier.bussiness_id}</p>
          ))}
      </div>
      {/* <SupplierAddForm /> */}
    </div>
  )
}
export default InspecReqList
