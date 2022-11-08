import { useEffect, useState } from 'react'
import '../styles/supplierList.css'
import SupplierView from '../components/supplier/supplierView'
// import SupplierAddForm from "../components/supplierAddForm";
import Navbar from '../components/supplier/Navbar'
import SupplierNavbar from '../components/supplier/supplierNavbar'

const SupplierList = () => {
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
      <Navbar />
      <SupplierNavbar />
      <div className="supplierList">
        {supplierList &&
          supplierList.map((supplier, i) => (
            <SupplierView key={supplier._id} supplier={supplier} />
            //   <p key={supplier._id}>{supplier.bussiness_id}</p>
          ))}
      </div>
      {/* <SupplierAddForm /> */}
    </div>
  )
}
export default SupplierList
