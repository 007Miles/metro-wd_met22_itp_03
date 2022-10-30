import React from 'react'
import axios from 'axios'
import { useEffect, useState, Fragment } from 'react'
//import { useParams } from 'react-router-dom'
import ReadOnlyRowBatch from '../components/readOnlyRowBatch.js'
import EditRowBatch from '../components/EditRowBatch.js'

export default function Batch() {
  const [batches, setBatches] = useState([])
  const [q, setQ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4000/api/batch').then((res) => {
      setBatches(res.data)
    })
  }, [])

  const [editFormData, setEditFormData] = useState({
    prod_Name: '',
    quantity: '',
    exp_date: '',
    manu_date: '',
    arrived_date: '',
    supplier_Name: '',
    buy_price: '',
    sell_price: '',
  })

  const handleEditFormChange = (event) => {
    //event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  function updateData(event) {
    //event.preventDefault()
    const updateBatch = {
      id: editRowBatch,
      quantity: editFormData.quantity,
      supplier_Name: editFormData.supplier_Name,
      sell_price: editFormData.sell_price,
    }

    axios
      .patch(
        'http://localhost:4000/api/batch/:id',
        {
          method: 'PATCH',
        },
        updateBatch
      )
      .then(() => {
        alert('Batch updated')
        window.location.reload()
      })
  }

  // # const updateBatch = (event) => {
  //   console.log(event)
  //   fetch('http://localhost:4000/api/batch/' + event.target.value, {
  //     method: 'PATCH',
  //   })
  // }

  // const handleEditFormSubmit = (event) => {
  //   event.preventDefault()

  //   const editedBatch = {
  //     id: editBatchID,
  //     quantity: editFormData.quantity,
  //     supplier_Name: editFormData.supplier_Name,
  //     sell_price: editFormData.sell_price,
  //   }

  //   const newBatches = [...batches]

  //   const index = batches.findIndex((batch) => batch.id === editBatchID)

  //   newBatches[index] = editedBatch

  //   setBatches(newBatches)
  //   setEditBatchID(null)
  // }

  const [editRowBatch, setEditRowBatch] = useState([])

  const handleEditClick = (event, batch) => {
    //event.prventdefault()
    setEditRowBatch(batch._id)

    const formValues = {
      prod_Name: batch.prod_Name,
      quantity: batch.quantity,
      exp_date: batch.exp_date,
      manu_date: batch.manu_date,
      arrived_date: batch.arrived_date,
      supplier_Name: batch.supplier_Name,
      buy_price: batch.buy_price,
      sell_price: batch.sell_price,
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditRowBatch(null)
  }

  const handleDeleteClick = (event) => {
    console.log(event)
    fetch('http://localhost:4000/api/batch/' + event.target.value, {
      method: 'DELETE',
    })
  }

  return (
    <div className="batch">
      <div className="batches">
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <form onSubmit={updateData}>
          <table>
            <thead>
              <tr border="1">
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Expiry Date</th>
                <th>Manufacture Date</th>
                <th>Arrived Date</th>
                <th>Supplier Name</th>
                <th>Buy Price</th>
                <th>Sell Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {batches
                .filter((batch) => {
                  if (q === '') {
                    return batch
                  } else if (
                    batch.prod_Name.toLowerCase().includes(q.toLowerCase())
                  ) {
                    return batch
                  }
                })
                .map((batch) => (
                  <Fragment>
                    {editRowBatch === batch._id ? (
                      <EditRowBatch
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRowBatch
                        // value={batch._id}
                        batch={batch}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
            </tbody>
          </table>
        </form>
      </div>
      {/* <BatchForm />  */}
    </div>
  )
}
