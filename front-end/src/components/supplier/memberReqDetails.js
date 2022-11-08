import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../../styles/supplierList.css'
import SideNavbar from './sidenavbar-supplier.component'
const MemberReqDetails = () => {
  const [memberReq, setMemberReq] = useState({})

  const { id } = useParams()
  console.log(id)
  //Set Status to Approved
  const handleSubmitOk = async (e) => {
    e.preventDefault()

    const memberReq = {
      status: 'Approved',
    }
    console.log(memberReq)
    const response = await fetch(
      'http://localhost:4000/api/supplyReq/putSupplyReq/' + id,
      {
        method: 'PUT',
        body: JSON.stringify(memberReq),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
      // setError(json.error);
      console.log(json)
    }
  }
  //Set Status to Rejected
  const handleSubmitNo = async (e) => {
    e.preventDefault()

    const memberReq = {
      status: 'Denied',
    }
    console.log(memberReq)
    const response = await fetch(
      'http://localhost:4000/api/supplyReq/putSupplyReq/' + id,
      {
        method: 'PUT',
        body: JSON.stringify(memberReq),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
      // setError(json.error);
      console.log(json)
    }
  }
  //
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
  return (
    <div className="concontainer flex">
      <SideNavbar />
      <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12">
        <h2 className="text-3xl text-blue-500 text-center m-5">
          Membership Request Details
        </h2>
        <div className="container bg-white rounded-xl shadow border p-8 m-10 w-10/12">
          <p>
            <strong>Business Name Or Supplier Name -</strong>
            {memberReq.business_name}
          </p>
          <p>
            <strong>Status -</strong>
            {memberReq.verified}
          </p>
          <p>
            <strong>Email -</strong>
            {memberReq.email}
          </p>
          <p>
            <strong>Phone -</strong>
            {memberReq.phone}
          </p>
          <p>
            <strong>Address -</strong>
            {memberReq.address}
          </p>
          <p>
            <strong>Registering Product -</strong>
            {memberReq.registered_products}
          </p>
          <center>
            <button
              className="m-2 inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              value={memberReq._id}
              onClick={handleSubmitOk}
            >
              Accept Member Request
            </button>
            <button
              className="m-2 inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              value={memberReq._id}
              onClick={handleSubmitNo}
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
