import { useState } from 'react'
import Header from '../components/layout/header.js'
import Footer from '../components/layout/footer.js'

const BatchForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const batch = {
      prod_Name,
      warehouse_id,
      quantity,
      exp_date,
      manu_date,
      arrived_date,
      supplier_Name,
      buy_price,
      sell_price,
    }
    const response = await fetch(
      'http://localhost:4001/api/batch/createABatch/',
      {
        method: 'POST',
        body: JSON.stringify(batch),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    console.log(response)

    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setProd_Name('')
      setProd_warehouse_id('')
      setProd_qnty('')
      setProd_expdate('')
      setProd_ManuDate('')
      setProd_arrvDate('')
      setProd_suppName('')
      setProd_buyPr('')
      setProd_sellPr('')
      console.log('new batch added:', json)
    }
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
      <form onSubmit={handleSubmit}>
        <div className="container bg-green-200 rounded-xl shadow border p-8 m-24">
          <h1 className="text-3xl">Add a batch</h1>
          <div className="grid md:grid-cols-2 md:gap-4 mt-6 ">
            <div className="relative z-0 mb-4 w-full group ">
              <div className="py-3 px-10">
                <label>Product Name</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setProd_Name(e.target.value)}
                  value={prod_Name}
                />
              </div>
            </div>

            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-6">
                <label>Warehouse</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setProd_warehouse_id(e.target.value)}
                  value={warehouse_id}
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
                  onChange={(e) => setProd_qnty(e.target.value)}
                  value={quantity}
                />
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-6">
                <label>Expiry Date</label>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setProd_expdate(e.target.value)}
                  value={exp_date}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Manufacture Date</label>

                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setProd_ManuDate(e.target.value)}
                  value={manu_date}
                />
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-6">
                <label>Arrived Date</label>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setProd_arrvDate(e.target.value)}
                  value={arrived_date}
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
                  onChange={(e) => setProd_suppName(e.target.value)}
                  value={supplier_Name}
                />
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-6">
                <label>Buy Price</label>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setProd_buyPr(e.target.value)}
                  value={buy_price}
                />
              </div>
            </div>
          </div>
          <div className="relative z-0 mb-4 w-full group">
            <div className="py-3 px-10">
              <label>Sell Price</label>

              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setProd_sellPr(e.target.value)}
                value={sell_price}
              />
            </div>
          </div>
          <div className="relative z-0 mb-4 w-full group">
            <div className="py-3 px-10">
              <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                {' '}
                Add Batch
              </button>
              {error && <div className="error">{error}</div>}{' '}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BatchForm
