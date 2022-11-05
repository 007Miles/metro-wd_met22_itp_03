import { useEffect, useState } from 'react'

// import '../styles/supplierList.css'
import SupMemberReqView from './supMemberReqView'
// import SupplierView from './supplierView'
// import SupplierAddForm from "../components/supplierAddForm";

const SupMemberReqList = () => {
  const [supplierList, setSupplierList] = useState(null)

  useEffect(() => {
    const fetchSuppliers = async () => {
      const response = await fetch(
        //api should be change into view all membership requests
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
            <SupMemberReqView key={supplier._id} supplier={supplier} />
            //   <p key={supplier._id}>{supplier.bussiness_id}</p>
          ))}
      </div>
      {/* <SupplierAddForm /> */}
    </div>
  )
}
export default SupMemberReqList
