import React, { useState } from 'react'

function SupplierMembershipRequests() {
  // const [cred_id, setCredId] = useState('')
  const [verified, setVerified] = useState('false')
  const [business_name, setBusinessName] = useState('')
  const [email, setEmail] = useState('')
  const [registered_products, setRegisteredProducts] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resp = {
      // cred_id,
      verified,
      business_name,
      email,
      registered_products,
      phone,
      address,
    }
    console.log(resp)
    const response = await fetch(
      'http://localhost:3000/api/request/membership',
      {
        method: 'POST',
        body: JSON.stringify(resp),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
    }
    if (response.ok) {
      // setCredId('')
      setVerified('')
      setBusinessName('')
      setEmail('')
      setRegisteredProducts('')
      setPhone('')
      setAddress('')

      console.log('New membership request added', json)
    }
  }

  return (
    <div>
      <body class="bg-gray-100 border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500">
        <form
          class="px-4 my-32 max-w-3xl mx-auto space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <h1 class="text-3xl font-semibold">
              Request to Become a Supplier for Perera Distributors
            </h1>
            <p class="text-gray-600">
              We will handle your request and send your login credentials to the
              given e-mail within 48 hours
            </p>
          </div>
          {/* <div>
            <label for="cred_id">Credential ID </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="supplierID"
              id="supplierID"
              value={cred_id}
              onChange={(e) => setCredId(e.target.value)}
              required="required"
              placeholder="Give a user name"
            ></input>
          </div> */}
          <div>
            <label for="business_name">Business Name </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="supplier_name"
              id="supplier_name"
              value={business_name}
              onChange={(e) => setBusinessName(e.target.value)}
              required="required"
              placeholder="Type Business Name"
            ></input>
          </div>
          <div>
            <label for="verified"> Verified </label>
            <input
              class=""
              type="radio"
              name="verified"
              id="verified"
              disabled
            ></input>
            <label for="not_verified"> Not Verified </label>
            <input
              class=""
              type="radio"
              name="verified"
              id="not_verified"
              value={verified}
              onChange={(e) => setVerified(e.target.value)}
              checked
              disabled
            ></input>
            <p class="text-sm text-teal-600">You are not verified for now</p>
          </div>
          <div>
            <label for="email">E-mail </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="product"
              id="product"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required="required"
              placeholder="Type Your E-mail"
            ></input>
          </div>
          <div>
            <label for="registered_products">Registered Products </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="registered_products"
              id="registered_products"
              value={registered_products}
              onChange={(e) => setRegisteredProducts(e.target.value)}
              required="required"
              placeholder="Products You'll Supply"
            ></input>
          </div>
          <div>
            <label for="phone">Contact Number </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required="required"
              placeholder="Type Contact Number"
            ></input>
          </div>
          <div>
            <label for="address">Address </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required="required"
              placeholder="Type Your Address"
            ></input>
          </div>
          <div>
            <input
              class="bg-teal-500 rounded text-white"
              type="submit"
              value=" Send "
              name="submit"
            ></input>
          </div>
        </form>
      </body>
    </div>
  )
}

export default SupplierMembershipRequests
