import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../../styles/supplierList.css'
import SideNavbar from './sidenavbar-supplier.component'
const MemberReqDetails = () => {
  const [memberReq, setMemberReq] = useState({})
  const [rating, setRating] = useState('')

  const { id } = useParams()
  console.log(id)
  //fetch member request data
  const fetchMemberReq = async () => {
    const response = await fetch(
      `http://localhost:4000/api/request/getMembership/` + id
    )
    const json = await response.json()
    if (response.ok) {
      setMemberReq(json)

      console.log('in response')
      console.log(json)
    }
  }
  useEffect(() => {
    fetchMemberReq()
  }, [])
  //
  console.log(memberReq.business_name)
  //Set Status to Approved
  const handleSubmitOk = async (e) => {
    e.preventDefault()

    const supplier = {
      business_name: memberReq.business_name,
      cred_id: '123456789012345678901234',
      address: memberReq.address,
      email: memberReq.email,
      phone: memberReq.phone,
      registered_products: memberReq.registered_products,
      rating,
    }
    console.log(supplier)
    console.log(memberReq.business_name)
    const response = await fetch(
      'http://localhost:4000/api/supplier/addSupplier',
      {
        method: 'POST',
        body: JSON.stringify(supplier),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
      // setError(json.error);
    }

    const memberReq1 = {
      verified: true,
    }
    console.log(memberReq1)
    const response1 = await fetch(
      'http://localhost:4000/api/request/updateMemberShip/' + id,
      {
        method: 'PUT',
        body: JSON.stringify(memberReq1),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json1 = await response1.json()

    // if (!response.ok) {
    //   // setError(json.error);
    //   console.log(json1)
    // }
  }
  //Set Status to Rejected
  const handleSubmitNo = async (e) => {
    e.preventDefault()

    const memberReq = {
      verified: false,
    }
    console.log(memberReq)
    const response1 = await fetch(
      'http://localhost:4000/api/request/updateMemberShip/' + id,
      {
        method: 'PUT',
        body: JSON.stringify(memberReq),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json1 = await response1.json()
    if (!response1.ok) {
      // setError(json.error);
      console.log(json1)
    }
  }

  return (
    <div className="concontainer flex">
      <SideNavbar />
      <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12">
        <h2 className="text-3xl text-blue-500 text-center m-5">
          Membership Request Details
        </h2>
        <div className="container bg-white rounded-xl shadow border p-8 m-10 w-10/12">
          <p className="p-2">
            <strong>Business Name Or Supplier Name -</strong>
            {memberReq.business_name}
          </p>
          <p className="p-2">
            <strong>Status -</strong>
            {String(memberReq.verified)}
          </p>
          <p className="p-2">
            <strong>Email -</strong>
            {memberReq.email}
          </p>
          <p className="p-2">
            <strong>Phone -</strong>
            {memberReq.phone}
          </p>
          <p className="p-2">
            <strong>Address -</strong>
            {memberReq.address}
          </p>
          <p className="p-2">
            <strong>Registering Product -</strong>
            {memberReq.registered_products}
          </p>
          <input
            type="number"
            placeholder="Give a Supplier Rating"
            required
            className="w-4/5 p-2 mt-2 mb-5 rounded box-border bg-gray-200"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
          <center>
            <button
              className="m-2 inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              value={memberReq._id}
              onClick={(e) => {
                handleSubmitOk(e)
                // window.location.reload(true)
                alert('New Supplier Added')
                // <SupplierDetails key={supplier._id} supplier={supplier} />;
              }}
            >
              Accept Member Request
            </button>
            <button
              className="m-2 inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              value={memberReq._id}
              onClick={(e) => {
                handleSubmitNo(e)
                window.location.reload(true)
                // <SupplierDetails key={supplier._id} supplier={supplier} />;
              }}
            >
              Reject Member Request
            </button>
          </center>
        </div>
      </div>
    </div>
  )
}

export default MemberReqDetails
