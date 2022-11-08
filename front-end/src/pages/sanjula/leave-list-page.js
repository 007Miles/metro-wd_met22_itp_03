// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout'

const LeaveList = () => {
  const [leaves, setLeave] = useState([])

  useEffect(() => {
    const fetchLeave = async () => {
      const response = await fetch(
        'http://localhost:3000/api/leaveReq/viewAllLeaves' // need to create a get all funtion in the back end to work
      )
      const json = await response.json()
      if (response.ok) {
        setLeave(json)
      }
    }

    fetchLeave()
  }, [])

  return (
    <div className="Header">
      <Layout />
      <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10">
        <h1 className="text-3xl">Manage all the leaves of employees</h1>
        <div className="mt-6 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="bg-white border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            No
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Employee ID
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Leave ID
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Starting Date
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            No of days
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Approval
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Reason
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {leaves.map((Leave, i) => (
                          <tr
                            key={Leave._id}
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {i + 1}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Leave.empId}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Leave.leaveId}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Leave.start_date}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Leave.num_days}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Leave.approval}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Leave.reason}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <div class="flex space-x-2 justify-center">
                                <div>
                                  {/* <button
                                  type="button"
                                  class="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                >
                                  View{' '}
                                </button> */}

                                  {/* Edit Button */}
                                  <Link to={`/updateLeave/${Leave._id}`}>
                                    <button
                                      type="button"
                                      class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      value={Leave._id}
                                      onClick={(e) => {
                                        console.log(e.target.value)
                                      }}
                                    >
                                      Edit{' '}
                                    </button>
                                  </Link>
                                  

                                  {/* Delete Button */}
                                  <Link to={`/deleteLeave/${Leave._id}`}>
                                    <button
                                      type="button"
                                      class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      value={Leave._id}
                                      onClick={(e) => {
                                        console.log(e.target.value)
                                      }}
                                    >
                                      Delete{' '}
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaveList
