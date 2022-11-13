import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from 'react-to-print'

const WarehouseList = () => {
  const [Warehouses, setWarehouse] = useState([])

  useEffect(() => {
    const fetchWarehouse = async () => {
      const response = await fetch(
        'http://localhost:3000/api/warehouse/viewAllWarehouses'
      );
      const json = await response.json();
      if (response.ok) {
        setWarehouse(json);
      }
    };

    fetchWarehouse();

  }, []);

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="container bg-green-200 rounded-xl shadow border p-8 m-10" ref={componentRef}>
      <div  className="flex">
        <h1 className="text-3xl">Welcome to Warehouse Department</h1>
      </div>

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
                          Warehouse ID
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Address
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Phone Number
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Storage Condition
                        </th>                 
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Actions
                        </th>
                      </tr>
                    </thead>


                    <tbody>
                      {Warehouses.map((warehouse, i) => (


                        <tr key={warehouse._id} class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {i+1}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {warehouse.wareId}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {warehouse.address}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {warehouse.phone}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {warehouse.storageCond}
                          </td>

                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div class="flex space-x-2 justify-center">
                              <div>


                                {/* Edit Button */}
                                <Link to={`../updateWarehouse/${warehouse._id}`}>
                                  <button type="button" class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    value={warehouse._id}
                                    onClick={(e) => {
                                      console.log(e.target.value);
                                    }}
                                  >
                                    Edit </button>
                                </Link>

                                {/* Delete Button */}
                                <Link to={`../deleteWarehouse/${warehouse._id}`}>
                                  <button type="button" class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    value={warehouse._id}
                                    onClick={(e) => {
                                      console.log(e.target.value);
                                    }}
                                  >
                                    Delete </button>
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
      <div>
      </div>
        <button onClick={handlePrint} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Print Warehouse</button>                              
    </div>

  )
}

export default WarehouseList