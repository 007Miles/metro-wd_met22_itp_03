import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
// import SideNavbar from '../supplier/sidenavbar-supplier.component'

import '../../styles/supplierList.css'
const ScheduleDetails = () => {
  const [schedule, setSchedule] = useState({})
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')

  const { id } = useParams()
  //
  const fetchSchedule = async () => {
    const response = await fetch(`http://localhost:4000/api/schedules/` + id)
    const json = await response.json()
    if (response.ok) {
      setSchedule(json.data)

      // console.log("in response");
      console.log(json)
    }
  }
  useEffect(() => {
    fetchSchedule()
  }, [])
  //
  const handleCreateReq = async (e) => {
    e.preventDefault()

    const supReq = {
      description,
      supply_id: schedule._id,
      status: 'Pending',
      priority,
    }
    console.log(supReq)
    console.log(supReq.supply_id)
    const response = await fetch(
      'http://localhost:4000/api/supplyReq/addSupplyReq',
      {
        method: 'POST',
        body: JSON.stringify(supReq),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
      // setError(json.error);
    }
  }
  return (
    <div className="container flex">
      <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12">
        <h2 className="text-4xl text-blue-500 text-center">Schedule Details</h2>
        <div className="container bg-white rounded-xl shadow border p-8 m-10 w-10/12">
          <h4 className="text-3xl text-blue-500 capitalize p-3">
            {schedule.supplier_name}
          </h4>
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
          <input
            type="text"
            placeholder="Enter Priority Level"
            className="w-4/5 p-2 mt-2 mb-5 rounded box-border bg-gray-200"
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
          />
          <input
            type="text"
            placeholder="Enter Description"
            className="w-4/5 p-2 mt-2 mb-5 rounded box-border bg-gray-200"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <center>
            <div>
              <button
                className="m-2 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                value={schedule._id}
                onClick={(e) => {
                  handleCreateReq(e)
                  window.location.href = 'http://localhost:3000/supScheduleList'
                  //   console.log(e.target.value)
                  // <SupplierDetails key={supplier._id} supplier={supplier} />;
                }}
              >
                Create A Inspection Request
              </button>
            </div>
          </center>
        </div>
      </div>
    </div>
  )
}

export default ScheduleDetails
