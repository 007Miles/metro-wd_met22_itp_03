import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ReadOnlyRowProduct = ({ product, handleDeleteClick }) => {
  return (
    <tr value={product._id}>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {product.name}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {product.measurement_unit}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {product.markupPrice}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {product.storageCondition}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {product.type}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {product.description}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {product.quantity}
      </td>
      <td>
        {(() => {
          if (product.quantity <= 300) {
            return (
              <div
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Low
              </div>
            )
          } else {
            return (
              <div
                style={{
                  backgroundColor: 'Green',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Available
              </div>
            )
          }
        })()}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <Link to={`/UpdateProduct/${product._id}`}>
          <button
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3 "
            value={product._id}
            onClick={(e) => {
              console.log(e.target.value)
            }}
          >
            Edit
          </button>
        </Link>
        <button
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          type="button"
          onClick={(event) => handleDeleteClick(event)}
          value={product._id}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default ReadOnlyRowProduct
