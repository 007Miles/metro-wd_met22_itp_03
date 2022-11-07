import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EmployeeAttendance = () => {
  const [empIds, setEmpIds] = useState([])
  const [empID, setEmpID] = useState('')
  const [employee, setEmployee] = useState({})

  const setCheckIn = () => {
    axios
      .get(
        `http://localhost:3000/api/AttendancesController/attendance/${empID}`
      )
      .then((res) => {
        if (res.data === null) {
          const data = {
            empId: empID,
            date: new Date(Date.now()),
            checkIn: new Date(Date.now()),
          }

          axios
            .post(
              'http://localhost:3000/api/AttendancesController/attendance',
              data
            )
            .then((res) => {
              console.log(res)
              alert('Done!')
            })
            .catch((e) => {
              console.error(e)
            })
        } else {

          const data = {
            checkIn: new Date(Date.now()),
          }

          axios
            .patch(
              `http://localhost:3000/api/AttendancesController/attendance/${empID}`,
              data
            )
            .then((res) => {
              console.log(res)
              alert('Done!')
            })
            .catch((e) => {
              console.error(e)
            })
        }
      })
      .catch((e) => {
        console.error(e)
      })
  }
  

  const setCheckOut = (id) => {
    const data = {
      checkOut: new Date("2022-11-06T02:46:18.744+00:00"),
    }

    axios
      .patch(
        `http://localhost:3000/api/AttendancesController/attendance/${id}`,
        data
      )
      .then((res) => {
        const OTHOURS = (Math.floor((new Date(res.data.checkOut) - new Date(res.data.checkIn))/(60 * 60 * 1000)) - 8)

        axios.patch(`http://localhost:3000/api/AttendancesController/attendance/${id}`, {otHrs: OTHOURS + res.data.otHrs}).then((res) => {
          alert("Done!")
        }).catch((e) => console.error(e))
        
      })
      .catch((e) => {
        console.error(e)
      })
  }

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
  }

  useEffect(() => {
    fetchEmployee()
  }, [])

  return (
    <div className="m-3">
      <div class="flex space-x-2 justify-center">
        <select
          className="p-2 w-full border rounded-full border-green-500 border-solid focus:outline-none focus:shadow-lg duration-500"
          onChange={(e) => setEmpID(e.target.value)}
        >
          <option hidden>-- Select an ID --</option>
          {empIds.map((emp) => (
            <option>{emp._id}</option>
          ))}
        </select>
        <button
          type="button"
          class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          // value={}
          onClick={() => {
            setCheckIn()
          }}
        >
          CheckIn{' '}
        </button>

        <button
          type="button"
          class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          // value={}
          onClick={() => {
            setCheckOut(empID)
          }}
        >
          CheckOut{' '}
        </button>
      </div>
    </div>
  )
}

export default EmployeeAttendance
