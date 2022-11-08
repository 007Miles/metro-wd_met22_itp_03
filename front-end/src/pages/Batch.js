import React from 'react'
import axios from 'axios'
import { useEffect, useState, Fragment } from 'react'
import Header from '../components/layout/header.js'
import Footer from '../components/layout/footer.js'
import Navbar from '../components/Navbar.js'
//import '../index.css'
import ReadOnlyRowBatch from '../components/readOnlyRowBatch.js'
//import EditRowBatch from '../components/EditRowBatch.js'

const Batch = () => {
  const [batches, setBatches] = useState([])
  const [q, setQ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4001/api/batch/getAllBatch/').then((res) => {
      console.log(res)
      setBatches(res.data.data)
    })
    console.log(typeof batches)
  }, [])

  const handleDeleteClick = (event) => {
    console.log(event)
    fetch(
      'http://localhost:4001/api/batch/deleteABatch/' + event.target.value,
      {
        method: 'DELETE',
      }
    )
  }

  return (
    <div>
      <Header
        headerButtons={[
          { path: '/batchForm', name: 'Add Batch' },
          { path: '/productList', name: 'View Products' },
        ]}
      />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg justify-center py-3 px-6">
        <div className="batches">
          <div className="py-3 px-6">
            <input
              type="text"
              className="search"
              placeholder="Search..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <form>
            <table className="w-full text-sm text-center text-gray-500 py-3 px-30 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col" className="">
                    Warehouse
                  </th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Expiry Date</th>
                  <th scope="col">Manufacture Date</th>
                  <th scope="col">Arrived Date</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Buy Price</th>
                  <th scope="col">Sell Price</th>
                  <th scope="col">Actions</th>
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
      <Footer />
    </div>
  )
}
export default Batch
