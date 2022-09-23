import React from 'react'

const EditRowBatch = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter quantity"
          name="quantity"
          defaultValue={editFormData.quantity}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter supplier name"
          name="supplierName"
          value={editFormData.supplier_Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter sell price..."
          name="sellPrice"
          value={editFormData.sell_price}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td></td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  )
}

export default EditRowBatch
