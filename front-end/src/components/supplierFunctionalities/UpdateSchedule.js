import React from 'react'

export default function UpdateSchedule() {
  return (
    <div>
      <body class="bg-gray-100 border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500">
        <form class="px-4 my-32 max-w-3xl mx-auto space-y-6">
          <div>
            <h1 class="text-3xl font-semibold">Update Supply Drops</h1>
            <p class="text-gray-600">Update your Schedule and submit</p>
          </div>
          <div>
            <label for="supplierID">Supplier ID </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="supplierID"
              id="supplierID"
              placeholder="Update Supplier ID"
            ></input>
          </div>
          <div>
            <label for="supplier_name">Supplier Name </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="supplier_name"
              id="supplier_name"
              placeholder="Update Supplier Name"
            ></input>
          </div>
          <div>
            <label for="product">Product </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="product"
              id="product"
              placeholder="Update Product"
            ></input>
          </div>
          <div>
            <label for="quantity">Quantity </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Update Quantity"
            ></input>
          </div>
          <div>
            <label for="price">Price </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="number"
              name="price"
              id="price"
              min={0}
              placeholder="Update Price"
            ></input>
          </div>
          <div>
            <label for="warehouse">Warehouse </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="warehouse"
              id="warehouse"
              placeholder="Update Warehouse Name"
            ></input>
          </div>
          <div>
            <p class="text-sm text-gray-600">
              Choose the time interval of your schedule{' '}
            </p>
            <label for="weekly"> Weekly </label>
            <input class="" type="radio" name="interval" id="weekly"></input>
            <label for="monthly"> Monthly </label>
            <input class="" type="radio" name="interval" id="monthly"></input>
            <label for="yearly"> Yearly </label>
            <input class="" type="radio" name="interval" id="yearly"></input>
          </div>
          <div class="">
            <label for="date">Date </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="date"
              name="date"
              id="date"
              placeholder="Select Date"
            ></input>
          </div>
          <div>
            <label for="dayOfTheWeek">Day of the week </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="dayOfTheWeek"
              id="dayOfTheweek"
              placeholder="Update Day of the Week"
            ></input>
          </div>
          <div>
            <label for="dayOfTheMonth">Day of the month </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="number"
              name="dayOfTheMonth"
              id="dayOfTheMonth"
              min={0}
              max="31"
            ></input>
          </div>
          <div>
            <label for="time">Time </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="time"
              name="time"
              id="time"
              placeholder="Select Time"
            ></input>
          </div>
          <div>
            <input
              class="bg-teal-500 rounded text-white"
              type="submit"
              value=" Submit "
              name="submit"
            ></input>
          </div>
        </form>
      </body>
    </div>
  )
}
