import React, { useEffect, useState } from 'react'

const EmployeeSalary = () => {
  const [empIds, setEmpIds] = useState([])
  const [employee, setEmployee] = useState({
    empName: 'Select a Name',
    role: 'select a Role',
  })
  const [otHrs, setOtHrs] = useState(0)

  const [sal, setSal] = useState(0);
  const [bSal, setBSal] = useState(0);
  const [otRate, setOTRate] = useState(0);

  const fetchEmployee = async () => {
    const response = await fetch(
      'http://localhost:3000/api/employee/viewAllEmployees'
    )
    const json = await response.json()
    if (response.ok) {
      setEmpIds(json)
    }
  }

  const getUser = async (id) => {
    const response = await fetch(
      ` http://localhost:3000/api/employee/viewEmployee/${id}`
    )
    const json = await response.json()
    if (response.ok) {
      console.log(json)
      setEmployee(json)
    }

    const response2 = await fetch(
      `http://localhost:3000/api/AttendancesController/attendance/${id}`
    )
    const json2 = await response2.json()
    if (response2.ok) {
      console.log(`http://localhost:3000/api/AttendancesController/attendance/${id}`)
      setOtHrs(json2.otHrs)
    }
  }

  useEffect(() => {
    fetchEmployee()
  }, [])

  return (
    <div className="m-3 px-2 py-6 shadow-md bg-emerald-200 rounded-lg">
      <form className="flex flex-col space-y-2 mx-5">
        <select
          className="border-blue-500 border-solid border rounded-md p-2"
          onChange={(e) => getUser(e.target.value)}
        >
          <option hidden>-- Select an ID --</option>
          {empIds.map((emp) => (
            <option>{emp._id}</option>
          ))}
        </select>
        <input
          className="border-blue-500 duration-500 focus:outline-none focus:shadow-md border-solid border rounded-md p-2"
          value={`Employee Name: ${
            employee.data ? employee.data.empName : 'Select an ID'
          }`}
        />
        <input
          className="border-blue-500 duration-500 focus:outline-none focus:shadow-md border-solid border rounded-md p-2"
          value={`Employee Role: ${
            employee.data ? employee.data.role : 'Select an ID'
          }`}
        />
        <input
        value={`OT Hours: ${otHrs}`}
          className="border-blue-500 duration-500 focus:outline-none focus:shadow-md border-solid border rounded-md p-2"
          placeholder="OT Hours Per Month"
        />
        {/* <input className='border-blue-500 duration-500 focus:outline-none focus:shadow-md border-solid border rounded-md p-2' placeholder='OT hrs' /> */}
        <input
        value={otRate}
        onChange={(e) => setOTRate(e.target.value)}
          className="border-blue-500 duration-500 focus:outline-none focus:shadow-md border-solid border rounded-md p-2"
          placeholder="OT Rate"
        />
        <input
        value={bSal}
        onChange={(e) => setBSal(e.target.value)}
          className="border-blue-500 duration-500 focus:outline-none focus:shadow-md border-solid border rounded-md p-2"
          placeholder="Basic Salary"
        />

        <p>Net Salary: {(otHrs * otRate + Number(bSal)) === 0? '': (otHrs * otRate + Number(bSal))}</p>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 mt-4 w-1/2 p-2 rounded-md text-white"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  )
}

export default EmployeeSalary
