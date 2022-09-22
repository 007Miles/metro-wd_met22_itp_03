import React from 'react'
import axios from 'axios'
import { useEffect, useState, Fragment } from 'react'
import ReadOnlyRowBatch from '../components/readOnlyRowBatch.js'
import EditRowBatch from '../components/EditRowBatch.js'
//import BatchDetails from "../components/BatchDetails.js";
//import BatchForm from "../components/BatchForm";

const Batch = () => {
  const [batches, setBatches] = useState(null)

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
    event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  function updateData(event) {
    //event.preventDefault();
    const updateBatch = {
      id: editBatchID,
      quantity: editFormData.quantity,
      supplier_Name: editFormData.supplier_Name,
      sell_price: editFormData.sell_price,
    }

    axios
      .patch('http://localhost:4000/api/:id', updateBatch)
      .then(() => {
        window.location.reload()
      })
      .catch((err) => {
        alert(err)
      })
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedBatch = {
      id: editBatchID,
      quantity: editFormData.quantity,
      supplier_Name: editFormData.supplier_Name,
      sell_price: editFormData.sell_price,
    }

    const newBatches = [...batch]

    const index = batch.findIndex((batch) => batch.id === editBatchID)

    newBatches[index] = editedBatch

    setBatches(newBatches)
    setEditBatchID(null)
  }

  const [editBatchID, setEditBatchID] = useState(null)

  const handledEditClick = (event, batch) => {
    // event.prventdefault();
    setEditBatchID(batch._id)

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
    setEditBatchID(null)
  }
  // useEffect(() => {
  //   const fetchBatch = async () => {
  //     const response = await fetch("http://localhost:4000/api/batch");
  //     const json = await response.json();

  //     if (response.ok) {
  //       setBatches(json);
  //       console.log(json);
  //     }
  //   };
  //   fetchBatch();
  // }, []);

  useEffect(() => {
    axios.get('http://localhost:4000/api/batch').then((res) => {
      setBatches(res.data)
    })
  })

  return (
    <div className="batch">
      <div className="batches">
        <form>
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
              {batches &&
                batches.map((batch) => (
                  <Fragment>
                    {editBatchID === batch._id ? (
                      <EditRowBatch
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                      />
                    ) : (
                      <ReadOnlyRowBatch
                        key={batch._id}
                        batch={batch}
                        handledEditClick={handledEditClick}
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
export default Batch
