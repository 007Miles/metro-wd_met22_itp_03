import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../../styles/supplierList.css'
const InspecReqDetails = () => {
  //   const [supplier, setSupplier] = useState({})
  const [inspecReq, setInspecReq] = useState({})

  const { id } = useParams()
  console.log(id)
  //
  //   const fetchSupplier = async () => {
  //     const response = await fetch(
  //       `http://localhost:4000/api/supplier/viewSupplier/` + id
  //     )
  //     const json = await response.json()
  //     if (response.ok) {
  //       setSupplier(json.data)

  //       // console.log("in response");
  //       // console.log(json);
  //     }
  //   }
  //   useEffect(() => {
  //     fetchSupplier()
  //   }, [])
  //
  const fetchInspecReq = async () => {
    const response = await fetch(
      `http://localhost:4000/api//supplyReq/viewSupplyReq/` + id
    )
    const json = await response.json()
    if (response.ok) {
      setInspecReq(json.data)

      console.log('in response')
      console.log(json)
    }
  }
  useEffect(() => {
    fetchInspecReq()
  }, [])
  //
  return (
    <div className="supplier-details">
      <h2 className="title">Inspection Request Details</h2>
      <h4>{inspecReq.description}</h4>
      <p>
        <strong>Description : </strong>
        {inspecReq.description}
      </p>
      <p>
        <strong>Email : </strong>
        {inspecReq.description}
      </p>
      <p>
        <strong>phone : </strong>
        {inspecReq.description}
      </p>
      <p>
        <strong>registered_product : </strong>
        {inspecReq.description}
      </p>
      <p>
        <strong>Rating : </strong>
        {inspecReq.description}
      </p>
      {/* <Link to={`/supplierRemove/${supplier._id}`}>
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
      </Link> */}
    </div>
  )
}

export default InspecReqDetails
