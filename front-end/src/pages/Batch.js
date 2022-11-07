import React from 'react'
import axios from 'axios'
import { useEffect, useState, Fragment } from 'react'
import ReadOnlyRowBatch from '../components/readOnlyRowBatch.js'
//import EditRowBatch from '../components/EditRowBatch.js'

const Batch = () => {
  const [batches, setBatches] = useState([])
  const [q, setQ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4000/api/batch/getAllBatch/').then((res) => {
      console.log(res)
      setBatches(res.data.data)
    })
    console.log(typeof batches)
  }, [])

  const handleDeleteClick = (event) => {
    console.log(event)
    fetch(
      'http://localhost:4000/api/batch/deleteABatch/' + event.target.value,
      {
        method: 'DELETE',
      }
    )
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
        <form>
          <table>
            <thead>
              <tr border="1">
                <th>Product Name</th>
                <th>Warehouse</th>
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
                  )
                    return batch
                })
                .map((batch) => (
                  <Fragment>
                    <ReadOnlyRowBatch
                      // value={batch._id}
                      batch={batch}
                      handleDeleteClick={handleDeleteClick}
                    />
                  </Fragment>
                ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}
export default Batch
