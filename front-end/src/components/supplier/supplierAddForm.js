import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const SupplierAddForm = () => {
  const [business_name, setBusiness_name] = useState('')
  const [cred_id, setCred_id] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [registered_products, setRegistered_products] = useState('')
  const [rating, setRating] = useState('')

  // const phoneArray = ["1234567890"];

  const handleSubmit = async (e) => {
    e.preventDefault()

    const supplier = {
      business_name,
      cred_id,
      address,
      email,
      phone,
      registered_products,
      rating,
    }
    console.log(supplier)
    const response = await fetch(
      'http://localhost:4000/api/supplier/addSupplier',
      {
        method: 'POST',
        body: JSON.stringify(supplier),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
      // setError(json.error);
    }
    if (response.ok) {
      // setError(null);
      setBusiness_name('')
      setCred_id('')
      setAddress('')
      setEmail('')
      setPhone('')
      setRegistered_products('')
      setRating('')

      console.log('New supplier added', json)
    }
  }

  return (
    <div className="content-center">
      <form
        className="container bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl text-green-500 text-center m-6">
          Add a new Supplier
        </h2>

        <label>Enter Business Name or Supplier Name :</label>
        <input
          type="text"
          placeholder="Business Or Supplier Name"
          className="w-4/5"
          onChange={(e) => setBusiness_name(e.target.value)}
          value={business_name}
        />

        <label>Enter Address :</label>
        <input
          type="text"
          placeholder="Address"
          className="w-4/5"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />

        <label>Enter Email:</label>
        <input
          type="text"
          placeholder="Email"
          className="w-4/5"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Enter Phone Number :</label>
        <input
          type="text"
          placeholder="Phone"
          className="w-4/5"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />

        <label>Enter Registering product :</label>
        <input
          type="text"
          placeholder="product"
          className="w-4/5"
          onChange={(e) => setRegistered_products(e.target.value)}
          value={registered_products}
        />

        <label>Enter Supplier Rating :</label>
        <input
          type="number"
          placeholder="Rating"
          className="w-4/5"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        />

        <label>setCred_id :</label>
        <input
          type="text"
          onChange={(e) => setCred_id(e.target.value)}
          // onChange={(e) => setCred_id("12345678901234567890abcd")}
          value={cred_id}
        />

        <center>
          <button
            className="m-2 inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            onClick={(e) => {
              // Navigate('/supplierList')
              window.location.href = 'http://localhost:3000/supplierList'
              //console.log(e.target.value)
            }}
          >
            Add Supplier
          </button>
        </center>

        {/* {error && <div className="error"></div>} */}
      </form>
    </div>
  )
}

export default SupplierAddForm
