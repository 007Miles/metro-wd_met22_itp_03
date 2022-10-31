import { useState } from 'react'
import '../styles/batchForm.css'
const BatchForm = () => {
  const [prod_Name, setProd_Name] = useState('')
  const [warehouse_id, setwarehouse_id] = useState('')
  const [quantity, setProd_qnty] = useState('')
  const [exp_date, setProd_expdate] = useState('')
  const [manu_date, setProd_ManuDate] = useState('')
  const [arrived_date, setProd_arrvDate] = useState('')
  const [supplier_Name, setProd_suppName] = useState('')
  const [buy_price, setProd_buyPr] = useState('')
  const [sell_price, setProd_sellPr] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const batch = {
      prod_Name,
      warehouse_id,
      quantity,
      exp_date,
      manu_date,
      arrived_date,
      supplier_Name,
      buy_price,
      sell_price,
    }
    const response = await fetch(
      'http://localhost:4000/api/batchcreateABatch',
      {
        method: 'POST',
        body: JSON.stringify(batch),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setProd_Name('')
      setwarehouse_id('')
      setProd_qnty('')
      setProd_expdate('')
      setProd_ManuDate('')
      setProd_arrvDate('')
      setProd_suppName('')
      setProd_buyPr('')
      setProd_sellPr('')
      console.log('new batch added:', json)
    }
  }
  return (
    <form className="createProduct" onSubmit={handleSubmit}>
      <h3> Add Batch</h3>
      <label>Product Name</label>
      <input
        type="text"
        onChange={(e) => setProd_Name(e.target.value)}
        value={prod_Name}
      />
      <label>Warehouse</label>
      <input
        type="text"
        onChange={(e) => setwarehouse_id(e.target.value)}
        value={warehouse_id}
      />
      <label>Quantity</label>
      <input
        type="number"
        onChange={(e) => setProd_qnty(e.target.value)}
        value={quantity}
      />
      <label>Expiry Date</label>
      <input
        type="date"
        onChange={(e) => setProd_expdate(e.target.value)}
        value={exp_date}
      />
      <label>Manifacture Date</label>
      <input
        type="date"
        onChange={(e) => setProd_ManuDate(e.target.value)}
        value={manu_date}
      />
      <label>Arrived Date</label>
      <input
        type="date"
        onChange={(e) => setProd_arrvDate(e.target.value)}
        value={arrived_date}
      />
      <label>Supplier Name</label>
      <input
        type="text"
        onChange={(e) => setProd_suppName(e.target.value)}
        value={supplier_Name}
      />
      <label>Buy Price</label>
      <input
        type="number"
        onChange={(e) => setProd_buyPr(e.target.value)}
        value={buy_price}
      />
      <label>Sell Price</label>
      <input
        type="number"
        onChange={(e) => setProd_sellPr(e.target.value)}
        value={sell_price}
      />
      <button> Add Batch</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default BatchForm
