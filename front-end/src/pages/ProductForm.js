import { useState } from 'react'
import Header from '../components/layout/header.js'
import Footer from '../components/layout/footer.js'

const ProductForm = () => {
  const [name, setDetail_name] = useState('')
  const [measurement_unit, setDetail_measurement_unit] = useState('')
  const [markupPrice, setDetail_markupPrice] = useState('')
  const [storageCondition, setDetail_storageCondition] = useState('')
  const [type, setDetail_type] = useState('')
  const [description, setDetail_description] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      measurement_unit,
      markupPrice,
      storageCondition,
      type,
      description,
    }
    const response = await fetch(
      'http://localhost:4001/api/product/createProduct/',
      {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setDetail_name('')
      setDetail_measurement_unit('')
      setDetail_markupPrice('')
      setDetail_storageCondition('')
      setDetail_type('')
      setDetail_description('')
      console.log('new product added:', json)
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
        <div className=" w-full container bg-green-200 rounded-xl shadow border justify-center p-8 m-24">
          <h3 className="text-3xl"> Add Product</h3>
          <div className="grid md:grid-cols-2 md:gap-12 mt-6 ">
            <div className="relative z-0 mb-4 w-full group ">
              <div className="py-3 px-10">
                <label>Product Name</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setDetail_name(e.target.value)}
                  value={name}
                />
              </div>
            </div>

            <div className="relative z-2 mb-4 w-full group">
              <div className="py-3 px-6">
                <label>measurement_unit</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setDetail_measurement_unit(e.target.value)}
                  value={measurement_unit}
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
                  onChange={(e) => setDetail_markupPrice(e.target.value)}
                  value={markupPrice}
                />
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Storage Condition</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setDetail_storageCondition(e.target.value)}
                  value={storageCondition}
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
                  onChange={(e) => setDetail_type(e.target.value)}
                  value={type}
                />
              </div>
            </div>
            <div className="relative z-0 mb-4 w-full group">
              <div className="py-3 px-10">
                <label>Description</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setDetail_description(e.target.value)}
                  value={description}
                />
              </div>
            </div>
          </div>
          <div className="relative z-0 mb-4 w-full group">
            <div className="py-3 px-10">
              <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Add Product
              </button>
              {error && <div className="error">{error}</div>}{' '}
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default ProductForm
