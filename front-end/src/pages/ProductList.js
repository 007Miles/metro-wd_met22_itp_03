import React from 'react'
import axios from 'axios'
import { useEffect, useState, Fragment, useRef } from 'react'
import ReadOnlyRowProduct from '../components/ProductDetails.js'
import printDocument from '../utils/printDocument.js'
import Header from '../components/layout/header.js'
import Footer from '../components/layout/footer.js'
import { FiPrinter } from 'react-icons/fi'

const ProductList = () => {
  // const componentRef = useRef()
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // })

  const [products, setProducts] = useState([])
  const [q] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/product/getAllProducts/')
      .then((res) => {
        setProducts(res.data.data)
      })
  }, [])

  const handleDeleteClick = (event) => {
    console.log(event)
    fetch(
      'http://localhost:3000/api/product/deleteProduct/' + event.target.value,
      {
        method: 'DELETE',
      }
    )
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
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg justify-center py-3 px-6">
        <div className="container bg-green-200 rounded-xl shadow border p-8 m-20">
          <form>
            <h3 className="card-title mb-0 h3">Products</h3>

            <table className=" w-full text-sm text-center text-gray-500 py-3 px-30 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr border="1">
                  <th scope="col">Product Name</th>
                  <th scope="col">Measurement Unit</th>
                  <th scope="col">Markup Price</th>
                  <th scope="col">Storage Condition</th>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col"> Total Quantity</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products
                  .filter((product) => {
                    if (q === '') {
                      return product
                    } else if (
                      product.prod_Name.toLowerCase().includes(q.toLowerCase())
                    )
                      return product
                  })
                  .map((product) => (
                    <Fragment>
                      <ReadOnlyRowProduct
                        //s key={product._id}
                        product={product}
                        handleDeleteClick={handleDeleteClick}
                      />
                    </Fragment>
                  ))}
              </tbody>
            </table>
          </form>
          <button
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            onClick={() => printDocument(document.body, 'a1')}
          >
            <FiPrinter />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductList
