import { useState } from 'react'
import axios from 'axios'
// import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
// import Layout from '../../components/layout'
// import Header from '../../components/layout/header'

export default function LeaveCreateForm() {
  const navigate = useNavigate()

  const Register = () => {
    axios
      .post('http://localhost:3000/api/leaveReq/leave', {
        empId: empId,
        leaveId: leaveId,
        start_date: start_date,
        num_days: num_days,
        approval: approval,
        reason: reason,
      })
      .then((response) => {
        if (response.data.success) {
          SVGFEDropShadowElement.fire({
            title: 'Success!',
            text: response.data.message,
            icon: 'success',
            timer: 1000,
            timerProgressBar: true,
          }).then(() => {
            navigate('/edit')
          })
        }
      })
  }

  const [empId, setempID] = useState('')
  const [leaveId, setLeaveId] = useState('')
  const [start_date, setStart_date] = useState('')
  const [num_days, setNum_days] = useState('')
  const [approval, setApproval] = useState('')
  const [reason, setReason] = useState('')

  return (
    <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl">Leave Request Form</h1>
      <div className="mt-6 space-y-6">
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label className="sr-only">Employee ID</label>
            <input
              id="empId"
              name="empId"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Employee ID"
              onChange={(e) => {
                setempID(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="sr-only">Leave ID</label>
            <input
              id="leaveId"
              name="leaveId"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Leave ID"
              onChange={(e) => {
                setLeaveId(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="sr-only">Starting Date</label>
            <input
              id="start_date"
              name="start_date"
              type="date"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Starting Date"
              onChange={(e) => {
                setStart_date(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="sr-only">No of days</label>
            <input
              id="num_days"
              name="num_days"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="No of days"
              onChange={(e) => {
                setNum_days(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="sr-only">Approval</label>
            <input
              id="approval"
              name="approval"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Approval"
              onChange={(e) => {
                setApproval(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="sr-only">Reason</label>
            <input
              id="reason"
              name="reason"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Reason"
              onChange={(e) => {
                setReason(e.target.value)
              }}
            />
          </div>

          <br></br>
          <div>
            <button
              onClick={Register}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
