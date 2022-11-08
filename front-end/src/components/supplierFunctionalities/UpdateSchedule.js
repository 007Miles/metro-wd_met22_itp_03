import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

export default function UpdateSchedule() {
  const [supplier_name, setSupplierName] = useState('')
  const [supplierID, setSupplierID] = useState('')
  const [product, setProduct] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [warehouse, setWarehouse] = useState('')
  const [weekly, setWeekly] = useState('true')
  const [monthly, setMonthly] = useState('false')
  const [yearly, setYearly] = useState('false')
  const [date, setDate] = useState('')
  const [dayOfTheWeek, setDayOfTheWeek] = useState('')
  const [dayOfTheMonth, setDayOfTheMonth] = useState('')

  // const { state: { idClick } = {} } = useLocation()

  const [_id, setId] = useState()
  const [idFromButtonClick, setIdFromButtonClick] = useState()

  const handleClick = () => {
    setIdFromButtonClick(_id)
  }

  const { id } = useParams()

  const Update = async (e) => {
    e.preventDefault()

    const resp = {
      supplier_name,
      supplierID,
      product,
      quantity,
      price,
      warehouse,
      weekly,
      monthly,
      yearly,
      date,
      dayOfTheWeek,
      dayOfTheMonth,
      // time,
    }
    console.log(resp)
    const response = await fetch(
      `http://localhost:3000/api/schedules/${idFromButtonClick}`,
      {
        //+id
        method: 'PUT',
        body: JSON.stringify(resp),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
      console.log(json)
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/schedules/${idFromButtonClick}`)
      .then((response) => {
        let json = response.data.data
        setSupplierName(json.setSupplierName)
        setSupplierID(json.supplierID)
        setProduct(json.product)
        setQuantity(json.quantity)
        setPrice(json.price)
        setWarehouse(json.warehouse)
        setWeekly(json.weekly)
        setMonthly(json.monthly)
        setYearly(json.yearly)
        setDate(json.date)
        setDayOfTheWeek(json.dayOfTheWeek)
        setDayOfTheMonth(json.dayOfTheMonth)
      })
  }, [idFromButtonClick])

  return (
    <div>
      <body class="bg-gray-100 border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500">
        <form class="px-4 my-32 max-w-3xl mx-auto space-y-6">
          <div>
            <h1 class="text-3xl font-semibold">Update Supply Drops</h1>
            <p class="text-gray-600">Update your Schedule and submit</p>
            <input
              type="text"
              value={_id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Search by Schedule ID"
            ></input>
            <button class="bg-teal-300 x-4" type="button" onClick={handleClick}>
              {' '}
              Search Schedule{' '}
            </button>
          </div>
          <div>
            <label for="supplierID">Supplier ID </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="supplierID"
              id="supplierID"
              onChange={(e) => {
                setSupplierID(e.target.value)
              }}
              value={supplierID}
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
              onChange={(e) => {
                setSupplierName(e.target.value)
              }}
              value={supplier_name}
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
              onChange={(e) => {
                setProduct(e.target.value)
              }}
              value={product}
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
              onChange={(e) => {
                setQuantity(e.target.value)
              }}
              value={quantity}
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
              onChange={(e) => {
                setPrice(e.target.value)
              }}
              value={price}
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
              onChange={(e) => {
                setWarehouse(e.target.value)
              }}
              value={warehouse}
              placeholder="Update Warehouse Name"
            ></input>
          </div>
          <div>
            <p class="text-sm text-gray-600">
              Choose the time interval of your schedule{' '}
            </p>
            <label for="weekly"> Weekly </label>
            <input
              class=""
              type="radio"
              name="interval"
              checked
              id="weekly"
              onChange={(e) => {
                setWeekly(e.target.value)
              }}
              value={weekly}
            ></input>
            <label for="monthly"> Monthly </label>
            <input
              class=""
              type="radio"
              name="interval"
              id="monthly"
              onChange={(e) => {
                setMonthly(e.target.value)
              }}
              value={monthly}
            ></input>
            <label for="yearly"> Yearly </label>
            <input
              class=""
              type="radio"
              name="interval"
              id="yearly"
              onChange={(e) => {
                setYearly(e.target.value)
              }}
              value={yearly}
            ></input>
          </div>
          <div class="">
            <label for="date">Date </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="date"
              name="date"
              id="date"
              onChange={(e) => {
                setDate(e.target.value)
              }}
              value={date}
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
              onChange={(e) => {
                setDayOfTheWeek(e.target.value)
              }}
              value={dayOfTheWeek}
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
              onChange={(e) => {
                setDayOfTheMonth(e.target.value)
              }}
              value={dayOfTheMonth}
              min={0}
              max="31"
            ></input>
          </div>
          <div>
            <input
              class="bg-teal-500 rounded text-white"
              type="submit"
              value=" Confirm Update "
              onClick={Update}
              name="submit"
            ></input>
          </div>
        </form>
      </body>
    </div>
  )
}
