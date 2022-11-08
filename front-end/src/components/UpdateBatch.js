import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import GetAllBatches from '../pages/GetAllBatch.js'
import Header from '../components/layout/header.js'
// import Footer from '../components/layout/footer.js'

export default function UpdateBatch() {
  const id = useParams()
  var batchID = id.id
  var batch = GetAllBatches()
  var i = 0
  var details = {}

  for (i = 0; i < batch.length; i++) {
    if (batch[i]._id === batchID) {
      details.prod_Name = batch[i].prod_Name
      details.warehouse_id = batch[i].warehouse_id
      details.quantity = batch[i].quantity
      details.exp_date = batch[i].exp_date
      details.manu_date = batch[i].manu_date
      details.arrived_date = batch[i].arrived_date
      details.supplier_Name = batch[i].supplier_Name
      details.buy_price = batch[i].buy_price
      details.sell_price = batch[i].sell_price
      break
    }
  }

  const [prod_Name, setProd_Name] = useState('')
  const [warehouse_id, setProd_warehouse_id] = useState('')
  const [quantity, setProd_qnty] = useState('')
  const [exp_date, setProd_expdate] = useState('')
  const [manu_date, setProd_ManuDate] = useState('')
  const [arrived_date, setProd_arrvDate] = useState('')
  const [supplier_Name, setProd_suppName] = useState('')
  const [buy_price, setProd_buyPr] = useState('')
  const [sell_price, setProd_sellPr] = useState('')
  const [error, setError] = useState(null)

  function updateData(e) {
    e.preventDefault()

    const UpdateBatch = {
      prod_Name: batch[i].prod_Name,
      warehouse_id,
      quantity,
      exp_date: batch[i].exp_date,
      manu_date: batch[i].manu_date,
      arrived_date: batch[i].arrived_date,
      supplier_Name,
      buy_price: batch[i].buy_price,
      sell_price,
    }
    axios
      .patch(
        'http://localhost:4000/api/batch/updateBatch/' + batchID,
        UpdateBatch
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
      <Header
        headerButtons={[
          { path: '/batch', name: 'View Batches' },
          { path: '/batchForm', name: 'Add Batch' },
          { path: '/productList', name: 'View Products' },
          { path: '/productForm', name: 'Add Product' },
        ]}
      />
      <form onSubmit={updateData}>
        <div className="container bg-green-200 rounded-xl shadow border p-8 m-24">
          <h3 className="text-3xl"> Update Batch</h3>
          <div className="grid md:grid-cols-2 md:gap-4 mt-6 ">
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Product Name</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                  value={details.prod_Name}
                  onChange={(e) => setProd_Name(e.target.value)}
                />
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-6">
                <label>Warehouse</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={details.warehouse_id}
                  onChange={(e) => setProd_warehouse_id(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Quantity</label>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={details.quantity}
                  onChange={(e) => setProd_qnty(e.target.value)}
                />
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-6">
                <label>Expiry Date</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                  value={details.exp_date}
                  onChange={(e) => setProd_expdate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Manifacture Date</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                  value={details.manu_date}
                  onChange={(e) => setProd_ManuDate(e.target.value)}
                />
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-6">
                <label>Arrived Date</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                  value={details.arrived_date}
                  onChange={(e) => setProd_arrvDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Supplier Name</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={details.supplier_Name}
                  onChange={(e) => setProd_suppName(e.target.value)}
                />{' '}
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-6">
                <label>Buy Price</label>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={details.buy_price}
                  readOnly
                  onChange={(e) => setProd_buyPr(e.target.value)}
                />{' '}
              </div>
            </div>
          </div>
          <div className="relative z-0 mb-4 w-full group">
            <div className="py-3 px-10">
              <label>Sell Price</label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                readOnly
                value={details.sell_price}
                onChange={(e) => setProd_sellPr(e.target.value)}
              />
            </div>
          </div>
          <div className="relative z-0 mb-4 w-full group">
            <div className="py-3 px-10">
              <button
                type="submit"
                className="group relative flex w-full justify-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Edit Batch
              </button>
              {error && <div className="error">{error}</div>}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
