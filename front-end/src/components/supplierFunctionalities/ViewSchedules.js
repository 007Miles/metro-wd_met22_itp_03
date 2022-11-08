import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'

export default function ViewSchedules() {
  const [supplierID, setSupplierID] = useState('')
  const [supplier_name, setSupplierName] = useState('')
  const [product, setProduct] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [warehouse, setWarehouse] = useState('')
  const [weekly, setWeekly] = useState('true')
  const [monthly, setMonthly] = useState('false')
  const [yearly, setYearly] = useState('false')
  const [dayOfTheWeek, setDayOfTheWeek] = useState('')
  const [dayOfTheMonth, setDayOfTheMonth] = useState('')

  // const [post, setPost] = useState({})
  const [id, setId] = useState()
  const [idFromButtonClick, setIdFromButtonClick] = useState()

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/schedules/${idFromButtonClick}`)
      .then((response) => {
        let json = response.data.data
        setSupplierID(json.supplierID)
        setSupplierName(json.setSupplierName)
        setProduct(json.product)
        setQuantity(json.quantity)
        setPrice(json.price)
        setWarehouse(json.warehouse)
        setWeekly(json.weekly)
        setMonthly(json.monthly)
        setYearly(json.yearly)
        setDayOfTheWeek(json.dayOfTheWeek)
        setDayOfTheMonth(json.dayOfTheMonth)
        // setPost(response.data)
      })
  }, [idFromButtonClick])

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
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Search by Schedule ID"
            ></input>
            <button class="bg-teal-300 x-4" type="button" onClick={handleClick}>
              {' '}
              Search Schedule{' '}
            </button>
          </div>
          <div class="card bg-gray-300">
            <div>
              <label for="supplierID">Supplier ID </label>
              <input
                readOnly
                defaultValue={(e) => {
                  setSupplierID(e.target.value)
                }}
                value={supplierID}
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
                //defaultValue={post.supplier_name}
                defaultValue={(e) => {
                  setSupplierName(e.target.value)
                }}
                value={supplier_name}
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
                defaultValue={(e) => {
                  setProduct(e.target.value)
                }}
                value={product}
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
                defaultValue={(e) => {
                  setQuantity(e.target.value)
                }}
                value={quantity}
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
                defaultValue={(e) => {
                  setPrice(e.target.value)
                }}
                value={price}
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
                defaultValue={(e) => {
                  setWarehouse(e.target.value)
                }}
                value={warehouse}
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
                defaultValue={(e) => {
                  setWeekly(e.target.value)
                }}
                value={weekly}
                checked
                disabled
              ></input>

              <label for="monthly"> Monthly </label>
              <input
                class=""
                type="radio"
                name="interval"
                id="monthly"
                defaultValue={(e) => {
                  setMonthly(e.target.value)
                }}
                value={monthly}
                disabled
              ></input>

              <label for="yearly"> Yearly </label>
              <input
                class=""
                type="radio"
                name="interval"
                id="yearly"
                defaultValue={(e) => {
                  setYearly(e.target.value)
                }}
                value={yearly}
                disabled
              ></input>
            </div>
            <div>
              <label for="dayOfTheWeek">Day of the week </label>
              <input
                class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
                type="text"
                name="dayOfTheWeek"
                id="dayOfTheweek"
                defaultValue={(e) => {
                  setDayOfTheWeek(e.target.value)
                }}
                value={dayOfTheWeek}
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
                defaultValue={(e) => {
                  setDayOfTheMonth(e.target.value)
                }}
                value={dayOfTheMonth}
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
  )
}
