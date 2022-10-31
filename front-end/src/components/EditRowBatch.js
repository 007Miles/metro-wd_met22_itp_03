import React from 'react'

const EditRowBatch = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td></td>
      <th></th>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter quantity"
          name="quantity"
          value={editFormData.quantity}
          onChange={handleEditFormChange}
        />
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
        />
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
        />
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
