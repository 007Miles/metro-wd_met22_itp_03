import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ReadOnlyRowBatch = ({ batch, handleDeleteClick }) => {
  return (
    <tr border="1" value={batch._id}>
      <td>{batch.prod_Name}</td>
      <th>{batch.warehouse_id}</th>
      <td>{batch.quantity}</td>
      <td>{batch.exp_date}</td>
      <td>{batch.manu_date}</td>
      <td>{batch.arrived_date}</td>
      <td>{batch.supplier_Name}</td>
      <td>{batch.buy_price}</td>
      <td>{batch.sell_price}</td>
      <td>
        {(() => {
          if (batch.quantity <= 300) {
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
      <td>
        <Link to={`/UpdateBatch/${batch._id}`}>
          <button
            className="editprdct"
            value={batch._id}
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
          value={batch._id}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default ReadOnlyRowBatch
