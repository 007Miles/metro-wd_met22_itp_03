import React from 'react'

const ReadOnlyRowBatch = ({ batch, handledEditClick, handleDeleteClick }) => {
  return (
    <tr border="1" value={batch._id}>
      <td>{batch.prod_Name}</td>
      <td>{batch.quantity}</td>
      <td>{batch.exp_date}</td>
      <td>{batch.manu_date}</td>
      <td> {batch.arrived_date}</td>
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
        <button
          type="button"
          onClick={(event) => handledEditClick(event, batch)}
          value={batch._id}
        >
          Edit
        </button>

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
