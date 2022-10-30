import React from 'react'
import { useEffect, useState } from 'react'

import ProductDetails from '../components/ProductDetails.js'

const ProductList = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:4001/api/product')
      const json = await response.json()

      if (response.ok) {
        setProducts(json)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="Product">
      <div className="products">
        {products &&
          products.map((product) => (
            <ProductDetails product={product} key={product._id} />
          ))}
      </div>
    </div>
  )
}

export default ProductList
