import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EmployeSalaryList = () => {
  const [empSalarys, setSalary] = useState([])

  useEffect(() => {
    const fetchSalary = async () => {
      const response = await fetch(
        'http://localhost:3000/api/role/viewAllRoles'
      );
      const json = await response.json();
      if (response.ok) {
        setSalary(json);
      }
    };

    fetchSalary();

  }, []);

  return (
    <div className="container bg-green-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl">Welcome to Employee Salary Department</h1>
      <div className="mt-6 space-y-6">
        <div className="-space-y-px rounded-md shadow-sm">

          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          No
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Employee ID
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Name
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Role
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Basic Salary
                        </th>                 
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Net Salary
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Actions
                        </th>
                      </tr>
                    </thead>


                    <tbody>
                      {empSalarys.map((salary, i) => (


                        <tr key={salary._id} class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {i+1}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {salary.empId}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {salary.empName}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {salary.role}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {salary.basicSalary}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {salary.netSalary}
                          </td>

                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div class="flex space-x-2 justify-center">
                              <div>

                                {/* Edit Button */}
                                <Link to={`/setSalary/${salary._id}`}>
                                  <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                    value={salary._id}
                                    onClick={(e) => {
                                      console.log(e.target.value);
                                    }}
                                  >
                                    Calculate Salary </button>
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
  )
}

export default EmployeSalaryList
