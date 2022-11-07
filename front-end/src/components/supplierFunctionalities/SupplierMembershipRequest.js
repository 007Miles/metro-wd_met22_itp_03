import React from 'react'

function SupplierMembershipRequests() {
  return (
    <div>
      <body class="bg-gray-100 border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500">
        <form class="px-4 my-32 max-w-3xl mx-auto space-y-6">
          <div>
            <h1 class="text-3xl font-semibold">
              Request to Become a Supplier for Perera Distributors
            </h1>
            <p class="text-gray-600">
              We will handle your request and send your login credentials to the
              given e-mail within 48 hours
            </p>
          </div>
          <div>
            <label for="cred_id">Credential ID </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="supplierID"
              id="supplierID"
              required="required"
              placeholder="Give a user name"
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
              checked
              disabled
            ></input>
            <p class="text-sm text-gray-600">You are not verified yet</p>
          </div>
          <div>
            <label for="business_name">Business Name </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="supplier_name"
              id="supplier_name"
              required="required"
              placeholder="Type Business Name"
            ></input>
          </div>
          <div>
            <label for="email">E-mail </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="product"
              id="product"
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
