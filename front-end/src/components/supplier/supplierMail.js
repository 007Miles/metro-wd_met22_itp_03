import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SupplierMail = () => {
  const [business_name, setBusiness_name] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [cred_id, setCred_id] = useState('')
  const [phone, setPhone] = useState('')
  const [registered_products, setRegistered_products] = useState('')
  const [rating, setRating] = useState('')

  const [supplier, setSupplier] = useState({})
  const { id } = useParams()

  const fetchSupplier = async () => {
    const response = await fetch(
      `http://localhost:4000/api/supplier/viewSupplier/` + id
    )
    const json = await response.json()
    if (response.ok) {
      setSupplier(json.data)
    }
  }
  useEffect(() => {
    fetchSupplier()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const supplierMsg = {
      business_name,
      cred_id,
      description,
      address,
      email,
      phone,
      registered_products,
      rating,
    }
    console.log(supplierMsg)
    const response = await fetch('http://localhost:4000/api/supplier/send', {
      method: 'POST',
      body: JSON.stringify(supplierMsg),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()

    if (!response.ok) {
      // setError(json.error);
    }
    console.log(json)

    setBusiness_name(supplier.business_name)
    setCred_id(supplier.cred_id)
    setAddress(supplier.address)
    setEmail(supplier.email)
    setPhone(supplier.phone)
    setRegistered_products(supplier.registered_products)
    setRating(supplier.rating)
  }

  return (
    <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12">
      <div className="container bg-white rounded-xl shadow border p-8 m-10 w-10/12">
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl text-blue-500 text-center">Send Mail</h2>
          <h4 className="text-3xl text-blue-500 capitalize p-3">
            {supplier.business_name}
          </h4>
          <p className="p-2">
            <strong>Address : </strong>
            {supplier.address}
          </p>
          <p className="p-2">
            <strong>Email : </strong>
            {supplier.email}
          </p>
          <p className="p-2">
            <strong>Phone : </strong>
            {supplier.phone}
          </p>
          <p className="p-2">
            <strong>Registered product : </strong>
            {supplier.registered_products}
          </p>
          <p className="p-2">
            <strong>Rating : </strong>
            {supplier.rating}
          </p>
          {/* <label className="p-2">Description :</label> */}
          <input
            type="text"
            placeholder="Enter The Massage"
            className="w-4/5 p-2 mt-2 mb-5 rounded box-border bg-gray-200"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <center>
            <button
              className="m-2 inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              onClick={(e) => {
                alert('Mail Send To Supplier', supplier.business_name)
                // <SupplierDetails key={supplier._id} supplier={supplier} />;
              }}
            >
              Send Mail
            </button>
          </center>
          {/* {error && <div className="error"></div>} */}
        </form>
      </div>
    </div>
  )
}

export default SupplierMail
