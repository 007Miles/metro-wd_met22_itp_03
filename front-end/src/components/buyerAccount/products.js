// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout'
import { useReactToPrint } from 'react-to-print'

const Products = () => {
  const [products, setProducts] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'http://localhost:3000/api/buyerProduct/getAllProducts'
      )
      const json = await response.json()
      if (response.ok) {
        setProducts(json)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'http://localhost:3000/api/buyerProduct/getAllProducts/?name=' +
          searchName
      )
      const json = await response.json()
      if (response.ok) {
        setProducts(json)
      }
    }

    fetchProducts()
  }, [searchName])

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="flex">
      <div
        className="container bg-green-200 rounded-xl shadow border p-8 m-10 "
        ref={componentRef}
      >
        <h1 className="text-3xl">Products</h1>
        <div class="flex ml-100 justify-end">
          <div class="mb-3 xl:w-96">
            <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
                onChange={(e) => setSearchName(e.target.value)}
              ></input>
              <button
                class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-cyan-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  class="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
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
                            Product Name
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Prices/per Kg
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Storage Condition
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Measurement unit
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
                        {products.map((Products, i) => (
                          <tr
                            key={Products._id}
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {i + 1}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Products.name}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Products.markupPrice}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Products.type}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Products.storageCondition}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Products.measurement_unit}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <div class="flex space-x-2 justify-center"></div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <div class="flex space-x-2 justify-center">
                                <div>
                                  {/* View Button */}
                                  <Link to={`/cart/`}>
                                    <button
                                      type="button"
                                      class="inline-block px-6 py-2 border-2 border-blue-500 text-blue-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      value={products._id}
                                      onClick={(e) => {
                                        console.log(e.target.value)
                                      }}
                                    >
                                      Add to Cart{' '}
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handlePrint}
        >
          {' '}
          Print Products Details{' '}
        </button> */}
      </div>
    </div>
  )
}

export default Products
