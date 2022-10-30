import React from 'react'

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h4>{product.name}</h4>
      <p>
        <strong>Measurement Unit</strong>
        {product.measurement_unit}
      </p>
      <p>
        <strong>MarkUp Price</strong>
        {product.markupPrice}
      </p>

      <p>
        <strong>Storage Condition</strong>
        {product.storageCondition}
      </p>
      <p>
        <strong>Type</strong>
        {product.type}
      </p>
      <p>
        <strong>Description</strong>
        {product.description}
      </p>
    </div>
  )
}

export default ProductDetails
