import React from 'react'
import axios from 'axios'
import { useEffect, useState, Fragment } from 'react'
import ReadOnlyRowProduct from '../components/ProductDetails.js'
import ChartProduct from './chart-vertical.js'
import Navbar from '../components/Navbar.js'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [q] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4001/api/product/getAllProducts/')
      .then((res) => {
        setProducts(res.data.data)
      })
  }, [])

  const handleDeleteClick = (event) => {
    console.log(event)
    fetch(
      'http://localhost:4001/api/product/deleteProduct/' + event.target.value,
      {
        method: 'DELETE',
      }
    )
  }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg justify-center py-3 px-6">
      <Navbar />
      <div className="container bg-green-200 rounded-xl shadow border p-8 m-10">
        <form>
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
      </div>
    </div>
  )
}

export default ProductList
