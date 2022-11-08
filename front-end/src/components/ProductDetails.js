import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ReadOnlyRowProduct = ({ product, handleDeleteClick }) => {
  return (
    <tr border="1" value={product._id}>
      <td>{product.name}</td>
      <td>{product.measurement_unit}</td>
      <td>{product.markupPrice}</td>
      <td>{product.storageCondition}</td>
      <td>{product.type}</td>
      <td>{product.description}</td>
      <td>
        <Link to={`/UpdateProduct/${product._id}`}>
          <button
            className="editprdct"
            value={product._id}
            onClick={(e) => {
              console.log(e.target.value)
            }}
          >
            Edit
          </button>
        </Link>
        <button
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
