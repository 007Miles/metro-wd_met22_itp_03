import React from "react";

const ReadOnlyRowBatch = ({ batch, handledEditClick }) => {
  return (
    <tr border="1">
      <td>{batch.prod_Name}</td>
      <td>{batch.quantity}</td>
      <td>{batch.exp_date}</td>
      <td>{batch.manu_date}</td>
      <td> {batch.arrived_date}</td>
      <td>{batch.supplier_Name}</td>
      <td>{batch.buy_price}</td>
      <td>{batch.sell_price}</td>
      <td></td>
      <td>
        <button
          type="button"
          onClick={(event) => handledEditClick(event, batch)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRowBatch;
