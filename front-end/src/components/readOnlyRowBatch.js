import React from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'

const ReadOnlyRowBatch = ({ batch, handleDeleteClick }) => {
  return (
    <tr value={batch._id}>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {batch.prod_Name}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {batch.warehouse_id}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {batch.quantity}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {batch.exp_date}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {batch.manu_date}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {batch.arrived_date}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {batch.supplier_Name}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {batch.buy_price}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {batch.sell_price}
      </td>
      <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <Link to={`/UpdateBatch/${batch._id}`}>
          <button
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3"
            value={batch._id}
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
          value={batch._id}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default ReadOnlyRowBatch
