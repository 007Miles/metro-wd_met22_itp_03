import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../../styles/supplierList.css'
const MemberReqDetails = () => {
  const [supplier, setSupplier] = useState({})

  const { id } = useParams()
  //
  const fetchSupplier = async () => {
    const response = await fetch(
      `http://localhost:4000/api/supplier/viewSupplier/` + id
    )
    const json = await response.json()
    if (response.ok) {
      setSupplier(json.data)

      // console.log("in response");
      // console.log(json);
    }
  }
  useEffect(() => {
    fetchSupplier()
  }, [])
  //
  return (
    <div className="supplier-details">
      <h2 className="title">Supplier Details</h2>
      <h4>{supplier.business_name}</h4>
      <p>
        <strong>Address : </strong>
        {supplier.address}
      </p>
      <p>
        <strong>Email : </strong>
        {supplier.email}
      </p>
      <p>
        <strong>phone : </strong>
        {supplier.phone}
      </p>
      <p>
        <strong>registered_product : </strong>
        {supplier.registered_products}
      </p>
      <p>
        <strong>Rating : </strong>
        {supplier.rating}
      </p>
      <Link to={`/supplierRemove/${supplier._id}`}>
        <button
          className="view_btn"
          value={supplier._id}
          // onClick={(e) => {
          //   console.log(e.target.value);
          //   // <SupplierDetails key={supplier._id} supplier={supplier} />;
          // }}
        >
          Delete Supplier
        </button>
      </Link>
      <Link to={`/supplierUpdate/${supplier._id}`}>
        <button
          className="view_btn"
          value={supplier._id}
          onClick={(e) => {
            console.log(e.target.value)
            // <SupplierDetails key={supplier._id} supplier={supplier} />;
          }}
        >
          Update Supplier
        </button>
      </Link>
      <Link to={`/supplierMail/${supplier._id}`}>
        <button
          className="view_btn"
          value={supplier._id}
          onClick={(e) => {
            console.log(e.target.value)
            // <SupplierDetails key={supplier._id} supplier={supplier} />;
          }}
        >
          Send Mail
        </button>
      </Link>
    </div>
  )
}

export default MemberReqDetails
