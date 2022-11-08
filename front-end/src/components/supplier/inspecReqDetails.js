import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../../styles/supplierList.css'
const InspecReqDetails = () => {
  //   const [supplier, setSupplier] = useState({})
  const [inspecReq, setInspecReq] = useState({})

  const { id } = useParams()
  console.log(id)
  //Set Status to Approved
  const handleSubmitOk = async (e) => {
    e.preventDefault()

    const inspecReq = {
      status: 'Approved',
    }
    console.log(inspecReq)
    const response = await fetch(
      'http://localhost:4000/api/supplyReq/putSupplyReq/' + id,
      {
        method: 'PUT',
        body: JSON.stringify(inspecReq),
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

    const inspecReq = {
      status: 'Denied',
    }
    console.log(inspecReq)
    const response = await fetch(
      'http://localhost:4000/api/supplyReq/putSupplyReq/' + id,
      {
        method: 'PUT',
        body: JSON.stringify(inspecReq),
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
    <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12">
      <h2 className="text-3xl text-blue-500 text-center m-5">
        Inspection Request Details
      </h2>
      <p>
        <strong>Priority -</strong>
        {inspecReq.priority}
      </p>
      <p>
        <strong>Status -</strong>
        {inspecReq.status}
      </p>
      <p>
        <strong>Description -</strong>
        {inspecReq.description}
      </p>
      <button
        className="m-2 inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        value={inspecReq._id}
        onClick={handleSubmitOk}
      >
        Accept Supply Drop
      </button>
      <button
        className="m-2 inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        value={inspecReq._id}
        onClick={handleSubmitNo}
      >
        Reject Supply Drop
      </button>
    </div>
  )
}

export default InspecReqDetails
