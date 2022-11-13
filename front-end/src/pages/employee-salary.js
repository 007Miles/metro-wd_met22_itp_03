import axios from 'axios'
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

  const insert = () => {
    
    const data = {
      empId: employee.data._id,
      empName: employee.data.empName,
      role: employee.data.role,
      otHrs: otHrs,
      otRate: otRate,
      basicSalary: bSal,
      netSalary: sal,

    };
    console.log(data);
    
    var config = {
      method: 'post',
      url: 'http://localhost:3000/api/role/addRole',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify (data)
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });


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
    console.log("test")
    console.log(employee._id)
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
    setSal((otHrs * otRate + Number(bSal)));
  }, [bSal, otRate, otHrs])

  useEffect(() => {
    fetchEmployee()
  }, [])

  return (
    <div className="m-3 px-40 py-6 shadow-md bg-emerald-200 rounded-lg">
      <div className="flex flex-col space-y-2 mx-5">
        <select
          className="border-blue-500 border-solid border rounded-md p-2 "
          onChange={(e) => getUser(e.target.value)}
        >
          <option hidden>-- Select an ID --</option>
          {empIds.map((emp) => (
            <option>{emp._id}</option>
          ))}
        </select>
        <input
          className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
          value={`Employee Name: ${
            employee.data ? employee.data.empName : 'Select an ID'
          }`}
        />
        <input
          className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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

        <p>Net Salary: {(otHrs * otRate + Number(bSal)) === 0? '': sal}</p>

        <div className="flex justify-center">
          
        </div>
      </div>
      <button
            className="bg-blue-500 mt-4 w-1/2 p-2 rounded-md text-white"
            onClick={insert}
          >
            Calculate
          </button>
    </div>
  )
}

export default EmployeeSalary
