import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewSchedules() {
  return (
    <div>
      <body class="bg-gray-100 border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500">
        <form class="px-4 my-32 max-w-3xl mx-auto space-y-6">
          <div>
            <h1 class="text-3xl font-semibold">View Supply Drops</h1>
            <p class="text-gray-600">
              Details of your current supply drops...If you want to make any
              changes you can update or cancel your schedules
            </p>
          </div>
          <div class="card bg-gray-300">
            <div>
              <label for="supplierID">Supplier ID </label>
              <input
                readOnly
                class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
                type="text"
                name="supplierID"
                id="supplierID"
              ></input>
            </div>
            <div>
              <label for="supplier_name">Supplier Name </label>
              <input
                class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
                type="text"
                name="supplier_name"
                id="supplier_name"
                readOnly
              ></input>
            </div>
            <div>
              <label for="product">Product </label>
              <input
                class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
                type="text"
                name="product"
                id="product"
                readOnly
              ></input>
            </div>
            <div>
              <label for="quantity">Quantity </label>
              <input
                class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
                type="text"
                name="quantity"
                id="quantity"
                readOnly
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
                readOnly
              ></input>
            </div>
            <div>
              <label for="warehouse">Warehouse </label>
              <input
                class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
                type="text"
                name="warehouse"
                id="warehouse"
                readOnly
              ></input>
            </div>
            <div>
              <p class="text-sm text-gray-600">
                The time interval of your schedule{' '}
              </p>
              <label for="weekly"> Weekly </label>
              <input
                class=""
                type="radio"
                name="interval"
                id="weekly"
                disabled
              ></input>
              <label for="monthly"> Monthly </label>
              <input
                class=""
                type="radio"
                name="interval"
                id="monthly"
                disabled
              ></input>
              <label for="yearly"> Yearly </label>
              <input
                class=""
                type="radio"
                name="interval"
                id="yearly"
                disabled
              ></input>
            </div>
            <div class="">
              <label for="date">Date </label>
              <input
                class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
                type="date"
                name="date"
                id="date"
                readOnly
              ></input>
            </div>
            <div>
              <label for="dayOfTheWeek">Day of the week </label>
              <input
                class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
                type="text"
                name="dayOfTheWeek"
                id="dayOfTheweek"
                readOnly
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
                readOnly
              ></input>
            </div>
            <div>
              <label for="time">Time </label>
              <input
                class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
                type="time"
                name="time"
                id="time"
                readOnly
              ></input>
            </div>
            <div class="text-blue-600 text-xl">
              <Link to="/Updateschedule">Update supply schedule</Link>
            </div>
            <div class="text-blue-600 text-xl">
              <Link to="/Cancelschedule">Cancel supply schedule</Link>
            </div>
          </div>
        </form>
      </body>
    </div>

    // <div>
    //   <div>
    //     <header>
    //       <h1>View supply drops</h1>
    //     </header>
    //   </div>
    //   <div>
    //     <h3>
    //       <b>Details of your current supply drops</b>
    //     </h3>
    //     <h4>
    //       If you want to make any changes you can update or cancel your
    //       schedules
    //     </h4>
    //   </div>
    //   <div class="card bg-gray-300">
    //     <form>
    //       <table>
    //         <tr>
    //           <td>Organization :</td>
    //           <td> </td>
    //         </tr>
    //         <tr>
    //           <td>Supplier ID :</td>
    //           <td> </td>
    //         </tr>
    //         <tr>
    //           <td>Phone no :</td>
    //           <td> </td>
    //         </tr>
    //         <tr>
    //           <td>Product :</td>
    //           <td> </td>
    //         </tr>
    //         <tr>
    //           <td>Quantity :</td>
    //           <td> </td>
    //         </tr>
    //         <tr>
    //           <td>Price :</td>
    //           <td> </td>
    //         </tr>
    //         <tr>
    //           <td>Warehouse :</td>
    //           <td> </td>
    //         </tr>
    //         <tr>
    //           <td>Time Interval :</td>
    //           <td> </td>
    //         </tr>
    //         <tr>
    //           <td>Date :</td>
    //           <td> </td>
    //         </tr>
    // <div>
    //   <Link to="/Updateschedule">Update supply schedule</Link>
    // </div>
    // <div>
    //   <Link to="/Cancelschedule">Cancel supply schedule</Link>
    // </div>
    //       </table>
    //     </form>
    //   </div>
    // </div>
  )
}
