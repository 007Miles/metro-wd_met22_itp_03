import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../../styles/supplierList.css'
import SideNavbar from './sidenavbar-supplier.component'
const InspecReqDetails = () => {
  //   const [supplier, setSupplier] = useState({})
  const [inspecReq, setInspecReq] = useState({})
  const [schedule, setSchedule] = useState({})

  const { id } = useParams()
  console.log(id)
  //Set Status to Approved
  const handleSubmitOk = async (e) => {
    e.preventDefault()
    //Add Data to batch
    const batch = {
      prod_Name: schedule.prouduct,
      warehouse_id: '123456789012345678901234',
      quantity: Number(schedule.quantity),
      exp_date: schedule.date,
      manu_date: schedule.date,
      arrived_date: schedule.date,
      supplier_Name: schedule.supplier_Name,
      buy_price: schedule.price,
      sell_price: schedule.price,
    }
    console.log(batch)
    console.log(batch.prod_Name)
    const response1 = await fetch(
      'http://localhost:4000/api/batch/createABatch',
      {
        method: 'POST',
        body: JSON.stringify(batch),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json1 = await response1.json()

    if (!response.ok) {
      // setError(json.error);
    }

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
  //fetch schedules using supply id
  console.log(inspecReq.supply_id)
  const fetchSchedule = async () => {
    const response = await fetch(
      `http://localhost:4000/api/schedules/` + inspecReq.supply_id
    )
    const json = await response.json()
    if (response.ok) {
      setSchedule(json.data)

      // console.log("in response");
      console.log(json)
    }
  }
  useEffect(() => {
    fetchSchedule()
  }, [inspecReq.supply_id])
  //
  return (
    <div className="concontainer flex">
      <SideNavbar />
      <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12">
        <h2 className="text-3xl text-blue-500 text-center m-5">
          Inspection Request Details
        </h2>
        <div className="container bg-white rounded-xl shadow border p-8 m-10 w-10/12">
          <p className="p-2">
            <strong>Product : </strong>
            {schedule.product}
          </p>
          <p className="p-2">
            <strong>Quantity : </strong>
            {schedule.quantity}
          </p>
          <p className="p-2">
            <strong>Price : </strong>
            {schedule.price}
          </p>
          <p className="p-2">
            <strong>Warehouse : </strong>
            {schedule.warehouse}
          </p>
          <p className="p-2">
            <strong>Date : </strong>
            {schedule.date}
          </p>
          <p className="p-2">
            <strong>Priority -</strong>
            {inspecReq.priority}
          </p>
          <p className="p-2">
            <strong>Status -</strong>
            {inspecReq.status}
          </p>
          <p className="p-2">
            <strong>Description -</strong>
            {inspecReq.description}
          </p>
          <center>
            <button
              className="m-2 inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              value={inspecReq._id}
              onClick={(e) => {
                handleSubmitOk(e)
                // window.location.reload(true)
                // <SupplierDetails key={supplier._id} supplier={supplier} />;
              }}
            >
              Accept Supply Drop
            </button>
            <button
              className="m-2 inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              value={inspecReq._id}
              onClick={(e) => {
                handleSubmitNo(e)
                window.location.reload(true)
                // <SupplierDetails key={supplier._id} supplier={supplier} />;
              }}
            >
              Reject Supply Drop
            </button>
          </center>
        </div>
      </div>
    </div>
  )
}

export default InspecReqDetails
