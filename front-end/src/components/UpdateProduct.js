import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import GetallProducts from '../pages/GetAllProduct.js'

export default function UpdateProduct() {
  const id = useParams()
  var z = id.id
  var product = GetallProducts()
  var i = 0
  var details = {}

  for (i = 0; i < product.length; i++) {
    if (product[i]._id === z) {
      details.name = product[i].name
      details.measurement_unit = product[i].measurement_unit
      details.markupPrice = product[i].markupPrice
      details.storageCondition = product[i].storageCondition
      details.type = product[i].type
      details.description = product[i].description
      break
    }
  }

  const [name, setDetail_name] = useState('')
  const [measurement_unit, setDetail_measurement_unit] = useState('')
  const [markupPrice, setDetail_markupPrice] = useState('')
  const [storageCondition, setDetail_storageCondition] = useState('')
  const [type, setDetail_type] = useState('')
  const [description, setDetail_description] = useState('')
  const [error, setError] = useState(null)

  function updateData(e) {
    e.preventDefault()

    const UpdateProduct = {
      name: product[i].name,
      measurement_unit: product[i].measurement_unit,
      markupPrice,
      storageCondition,
      type: product[i].type,
      description,
    }

    axios
      .patch(
        'http://localhost:4001/api/product/updateProduct/' + z,
        UpdateProduct
      )
      .then(() => {
        alert('Product Updated ')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div>
      <form onSubmit={updateData}>
        <div className="container bg-green-200 rounded-xl shadow border p-8 m-10">
          <h3 className="text-3xl"> Update Product</h3>
          <div className="grid md:grid-cols-2 md:gap-12 mt-6 ">
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Product Name</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                  value={details.name}
                  onChange={(e) => setDetail_name(e.target.value)}
                />
              </div>
            </div>

            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-6">
                <label>measurement_unit</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                  value={details.measurement_unit}
                  onChange={(e) => setDetail_measurement_unit(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Mark Up Price</label>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={details.markupPrice}
                  //value="30"
                  onChange={(e) => setDetail_markupPrice(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Storage Condition</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={details.storageCondition}
                  onChange={(e) => setDetail_storageCondition(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Type</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                  value={details.type}
                  onChange={(e) => setDetail_type(e.target.value)}
                />
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Description</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={details.description}
                  onChange={(e) => setDetail_description(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="relative z-0 mb-4 w-full group">
            <div className="py-3 px-10">
              <button
                type="submit"
                className="group relative flex w-full justify-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Save Details
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
