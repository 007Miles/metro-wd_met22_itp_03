import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import GetAllBatches from '../pages/GetAllBatch.js'

export default function UpdateBatch() {
  const id = useParams()
  var batchID = id.id
  var batch = GetAllBatches()
  var i = 0
  var details = {}

  for (i = 0; i < batch.length; i++) {
    if (batch[i]._id === batchID) {
      details.prod_Name = batch[i].prod_Name
      details.warehouse_id = batch[i].warehouse_id
      details.quantity = batch[i].quantity
      details.exp_date = batch[i].exp_date
      details.manu_date = batch[i].manu_date
      details.arrived_date = batch[i].arrived_date
      details.supplier_Name = batch[i].supplier_Name
      details.buy_price = batch[i].buy_price
      details.sell_price = batch[i].sell_price
      break
    }
  }

  const [prod_Name, setProd_Name] = useState('')
  const [warehouse_id, setProd_warehouse_id] = useState('')
  const [quantity, setProd_qnty] = useState('')
  const [exp_date, setProd_expdate] = useState('')
  const [manu_date, setProd_ManuDate] = useState('')
  const [arrived_date, setProd_arrvDate] = useState('')
  const [supplier_Name, setProd_suppName] = useState('')
  const [buy_price, setProd_buyPr] = useState('')
  const [sell_price, setProd_sellPr] = useState('')
  const [error, setError] = useState(null)

  function updateData(e) {
    e.preventDefault()

    const UpdateBatch = {
      prod_Name: batch[i].prod_Name,
      warehouse_id,
      quantity,
      exp_date: batch[i].exp_date,
      manu_date: batch[i].manu_date,
      arrived_date: batch[i].arrived_date,
      supplier_Name,
      buy_price: batch[i].buy_price,
      sell_price,
    }
    axios
      .patch(
        'http://localhost:4000/api/batch/updateBatch/' + batchID,
        UpdateBatch
      )
      .then(() => {
        alert('Product Updated ')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <form className="createProduct" onSubmit={updateData}>
      <h3> Update Batch</h3>
      <label>Product Name</label>
      <input
        type="text"
        readOnly
        value={details.prod_Name}
        onChange={(e) => setProd_Name(e.target.value)}
      />
      <label>Warehouse</label>
      <input
        type="text"
        placeholder={details.warehouse_id}
        onChange={(e) => setProd_warehouse_id(e.target.value)}
      />
      <label>Quantity</label>
      <input
        type="number"
        placeholder={details.quantity}
        onChange={(e) => setProd_qnty(e.target.value)}
      />
      <label>Expiry Date</label>
      <input
        type="text"
        readOnly
        value={details.exp_date}
        onChange={(e) => setProd_expdate(e.target.value)}
      />
      <label>Manifacture Date</label>
      <input
        type="text"
        readOnly
        value={details.manu_date}
        onChange={(e) => setProd_ManuDate(e.target.value)}
      />
      <label>Arrived Date</label>
      <input
        type="text"
        readOnly
        value={details.arrived_date}
        onChange={(e) => setProd_arrvDate(e.target.value)}
      />
      <label>Supplier Name</label>
      <input
        type="text"
        placeholder={details.supplier_Name}
        onChange={(e) => setProd_suppName(e.target.value)}
      />
      <label>Buy Price</label>
      <input
        type="number"
        value={details.buy_price}
        readOnly
        onChange={(e) => setProd_buyPr(e.target.value)}
      />
      <label>Sell Price</label>
      <input
        type="number"
        readOnly
        value={details.sell_price}
        onChange={(e) => setProd_sellPr(e.target.value)}
      />
      <button type="submit" className="prdctEditsave">
        Edit Batch
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
