import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import GetallProducts from '../pages/GetAllProduct.js'

export default function UpdateProduct() {
  const id = useParams()
  var z = id.id
  var product = GetallProducts()
  var i = 0
  var details = {}

  for (i = 0; i < product.length; i++) {
    if (product[i]._id === z) {
      details.name = product[i].name
      details.measurement_unit = product[i].measurement_unit
      details.markupPrice = product[i].markupPrice
      details.storageCondition = product[i].storageCondition
      details.type = product[i].type
      details.description = product[i].description
      break
    }
  }

  const [name, setDetail_name] = useState('')
  const [measurement_unit, setDetail_measurement_unit] = useState('')
  const [markupPrice, setDetail_markupPrice] = useState('')
  const [storageCondition, setDetail_storageCondition] = useState('')
  const [type, setDetail_type] = useState('')
  const [description, setDetail_description] = useState('')
  const [error, setError] = useState(null)

  function updateData(e) {
    e.preventDefault()

    const UpdateProduct = {
      name: product[i].name,
      measurement_unit: product[i].measurement_unit,
      markupPrice,
      storageCondition,
      type: product[i].type,
      description,
    }

    axios
      .patch(
        'http://localhost:4001/api/product/updateProduct/' + z,
        UpdateProduct
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
      <h3> Update Product</h3>
      <label>Product Name</label>
      <input
        type="text"
        readOnly
        value={details.name}
        onChange={(e) => setDetail_name(e.target.value)}
      />
      <label>measurement_unit</label>
      <input
        type="text"
        readOnly
        value={details.measurement_unit}
        onChange={(e) => setDetail_measurement_unit(e.target.value)}
      />
      <label>Mark Up Price</label>
      <input
        type="number"
        placeholder={details.markupPrice}
        //value="30"
        onChange={(e) => setDetail_markupPrice(e.target.value)}
      ></input>
      <label>Storage Condition</label>
      <input
        type="text"
        placeholder={details.storageCondition}
        onChange={(e) => setDetail_storageCondition(e.target.value)}
      />
      <label>Type</label>
      <input
        type="text"
        readOnly
        value={details.type}
        onChange={(e) => setDetail_type(e.target.value)}
      />
      <label>Description</label>
      <input
        type="text"
        placeholder={details.description}
        onChange={(e) => setDetail_description(e.target.value)}
      />
      <button type="submit" className="prdctEditsave">
        Save Details
      </button>
    </form>
  )
}
