import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../../styles/supplierList.css'
const SupplierDetails = () => {
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
    <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12">
      <h2 className="text-4xl text-green-500 text-center">Supplier Details</h2>
      <h4 className="text-3xl text-green-500 capitalize p-3">
        {supplier.business_name}
      </h4>
      <p className="p-2">
        <strong>Address : </strong>
        {supplier.address}
      </p>
      <p className="p-2">
        <strong>Email : </strong>
        {supplier.email}
      </p>
      <p className="p-2">
        <strong>phone : </strong>
        {supplier.phone}
      </p>
      <p className="p-2">
        <strong>registered product : </strong>
        {supplier.registered_products}
      </p>
      <p className="p-2">
        <strong>Rating : </strong>
        {supplier.rating}
      </p>
      <center>
        <div>
          <Link to={`/supplierRemove/${supplier._id}`}>
            <button
              className="m-2 inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
              className="m-2 inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
              className="m-2 inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
      </center>
    </div>
  )
}

export default SupplierDetails
