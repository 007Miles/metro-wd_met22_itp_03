import React from 'react'
import axios from 'axios'
import { useEffect, useState, Fragment } from 'react'
import ReadOnlyRowProduct from '../components/ProductDetails.js'

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
    <div className="Product">
      <div className="products">
        <form>
          <table className="container bg-gray-200 rounded-xl shadow border p-8 m-10">
            <thead>
              <tr border="1">
                <th>Product Name</th>
                <th>Measurement Unit</th>
                <th>Markup Price</th>
                <th>Storage Condition</th>
                <th>Type</th>
                <th>Description</th>
                <th>Actions</th>
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
