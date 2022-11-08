import { useEffect, useState } from 'react'
import '../styles/supplierList.css'
import { Link } from 'react-router-dom'
import SideNavbar from '../components/supplier/sidenavbar-supplier.component'
// import SupplierView from '../components/supplier/supplierView'
// // import SupplierAddForm from "../components/supplierAddForm";
// import Navbar from '../components/supplier/Navbar'
// import SupplierNavbar from '../components/supplier/supplierNavbar'

const SupplierList = () => {
  const [supplierList, setSupplierList] = useState([])

  useEffect(() => {
    const fetchSuppliers = async () => {
      const response = await fetch(
        'http://localhost:4000/api/supplier/viewAllSuppliers'
      )
      const json = await response.json()
      if (response.ok) {
        setSupplierList(json.data)
        console.log(json)
      }
    }
    fetchSuppliers()
  }, [])

  return (
    <div className="container flex">
      <SideNavbar />
      <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12">
        <h1 className="text-3xl">Supplier Management</h1>
        <div className="mt-6 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="bg-white border-b">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            No
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Supplier Name
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Phone
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Address
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Registered Product
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Rating
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {supplierList.map((supplierList, i) => (
                          <tr
                            key={supplierList._id}
                            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {i + 1}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                              {supplierList.business_name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {supplierList.phone}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {supplierList.email}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {supplierList.address}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {supplierList.registered_products}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {supplierList.rating}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2 justify-center">
                                <div>
                                  <Link
                                    to={`../supplierDetails/${supplierList._id}`}
                                  >
                                    <button
                                      type="button"
                                      className="m-2 inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      value={supplierList._id}
                                      onClick={(e) => {
                                        console.log(e.target.value)
                                      }}
                                    >
                                      View{' '}
                                    </button>
                                  </Link>

                                  {/* Edit Button */}
                                  <Link
                                    to={`../supplierUpdate/${supplierList._id}`}
                                  >
                                    <button
                                      type="button"
                                      className="m-2 inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      value={supplierList._id}
                                      onClick={(e) => {
                                        console.log(e.target.value)
                                      }}
                                    >
                                      Edit{' '}
                                    </button>
                                  </Link>

                                  {/* Delete Button */}
                                  <Link
                                    to={`../supplierRemove/${supplierList._id}`}
                                  >
                                    <button
                                      type="button"
                                      className="m-2 inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      value={supplierList._id}
                                      onClick={(e) => {
                                        window.location.reload()
                                        //console.log(e.target.value)
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
export default SupplierList
