import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout'

const Employeeprofile = () => {
  const [employees, setEmployee] = useState([])

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch(
        'http://localhost:3000/api/employee/viewAllEmployees'
      )
      const json = await response.json()
      if (response.ok) {
        setEmployee(json)
      }
    }

    fetchEmployee()
  }, [])

  //   return (

  //     <div>
  //       <h1>Employee <h1/>
  //     </div>
  // //     <div className="container bg-green-200 rounded-xl shadow border p-8 m-10">
  // //       <h1 className="text-3xl">Welcome to Employee Department</h1>
  // //       <div className="mt-6 space-y-6">
  // //         <div className="-space-y-px rounded-md shadow-sm">

  // //           <div class="flex flex-col">
  // //             <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
  // //               <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
  // //                 <div class="overflow-hidden">
  // //                   <table class="min-w-full">
  // //                     <thead class="bg-white border-b">
  // //                       <tr>
  // //                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  // //                           No
  // //                         </th>
  // //                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  // //                           Employee Name
  // //                         </th>
  // //                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  // //                           Phone
  // //                         </th>
  // //                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  // //                           Email
  // //                         </th>
  // //                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  // //                           Role
  // //                         </th>
  // //                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  // //                           Warehouse ID
  // //                         </th>
  // //                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  // //                           Actions
  // //                         </th>
  // //                       </tr>
  // //                     </thead>

  // //                     <tbody>
  // //                       {employees.map((employee, i) => (

  // //                         <tr key={employee._id} class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
  // //                           <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
  // //                             {i+1}
  // //                           </td>
  // //                           <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  // //                             {employee.empName}
  // //                           </td>
  // //                           <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  // //                             {employee.phone}
  // //                           </td>
  // //                           <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  // //                             {employee.email}
  // //                           </td>
  // //                           <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  // //                             {employee.role}
  // //                           </td>
  // //                           <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  // //                             {employee.wareId}
  // //                           </td>
  // //                           <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  // //                             <div class="flex space-x-2 justify-center">
  // //                               <div>

  // //                                 <button type="button" class="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
  // //                                   View </button>

  // //                                 {/* Edit Button */}
  // //                                 <Link to={`updateEmployee/${employee._id}`}>
  // //                                   <button type="button" class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
  // //                                     value={employee._id}
  // //                                     onClick={(e) => {
  // //                                       console.log(e.target.value);
  // //                                     }}
  // //                                   >
  // //                                     Edit </button>
  // //                                 </Link>

  // //                                 {/* Delete Button */}
  // //                                 <Link to={`/deleteEmployee/${employee._id}`}>
  // //                                   <button type="button" class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
  // //                                     value={employee._id}
  // //                                     onClick={(e) => {
  // //                                       console.log(e.target.value);
  // //                                     }}
  // //                                   >
  // //                                     Delete </button>
  // //                                 </Link>
  // //                               </div>
  // //                             </div>
  // //                           </td>
  // //                         </tr>
  // //                       ))}
  // //                     </tbody>
  // //                   </table>
  // //                 </div>
  // //               </div>
  // //             </div>
  // //           </div>
  // //         </div>
  // //       </div>
  // //     </div>
  //   )

  return (
    <div className="Headder">
      <Layout />
      <div className="body" class="">
        <br></br>
        <br></br>
        <h1>Employee profile</h1>
        <br></br>
        <div class="">
          <Link to={`/createLeave `}>
            <button className="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Create Leave Request
            </button>
          </Link>
        </div>
        <br></br>
        <br></br>
        <div>
          <Link to={`/viewAllLeaves `}>
            <button className="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              View all Leave Requests
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Employeeprofile
