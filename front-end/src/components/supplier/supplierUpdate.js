import { useState } from 'react'
import { useParams } from 'react-router-dom'

const SupplierUpdate = () => {
  const [business_name, setBusiness_name] = useState('')
  const [cred_id, setCred_id] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [registered_products, setRegistered_products] = useState('')
  const [rating, setRating] = useState('')

  const { id } = useParams()
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
      'http://localhost:4000/api/supplier/putSupplier/' + id,
      {
        method: 'PUT',
        body: JSON.stringify(supplier),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
      // setError(json.error);
      console.log(json)
    }
  }

  return (
    <form
      className="container bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl text-green-500 text-center m-6">
        Update Supplier Details
      </h2>

      <label>Business name/ Supplier Name :</label>
      <input
        type="text"
        placeholder="name"
        className="w-4/5"
        onChange={(e) => setBusiness_name(e.target.value)}
        value={business_name}
      />

      <label>Address :</label>
      <input
        type="text"
        placeholder="Address"
        className="w-4/5"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />

      <label>Email :</label>
      <input
        type="text"
        placeholder="Email"
        className="w-4/5"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Phone :</label>
      <input
        type="text"
        placeholder="Phone"
        className="w-4/5"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />

      <label>Registered product :</label>
      <input
        type="text"
        placeholder="Registered product"
        className="w-4/5"
        onChange={(e) => setRegistered_products(e.target.value)}
        value={registered_products}
      />

      <label>Rating :</label>
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
        <button className="m-2 inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          Update Supplier
        </button>
      </center>
      {/* {error && <div className="error"></div>} */}
    </form>
  )
}

export default SupplierUpdate
