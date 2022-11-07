import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  FormField,
  FormLabel,
  FormInput,
  FormTD,
  FormTable,
} from '../common/form'

const CraeteDelivery = () => {
  const [remark, setRemark] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [fromCurrent, setFromCurrent] = useState('')
  const [FromOrTo, setFromOrTo] = useState('')
  const [driver, setDriver] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [item, setItem] = useState('')
  const [qty, setQty] = useState('')
  const [itemList, setItemList] = useState([])

  const handleRemarkChange = (event) => setRemark(event.target.value)
  const handleDateChange = (event) => setDate(event.target.value)
  const handleTimeChange = (event) => setTime(event.target.value)
  const handleFromCurrentChange = (event) => setFromCurrent(event.target.value)
  const handleFromTo = (event) => setFromOrTo(event.target.value)
  const handleDriverChange = (event) => setDriver(event.target.value)
  const handleVehicleChange = (event) => setVehicle(event.target.value)
  const handleItemChange = (event) => setItem(event.target.value)
  const handleQtyChange = (event) => setQty(event.target.value)
  const handleItemListChange = (event) => setItemList({ ...itemList })

  // todo: get from database
  const warehouses = [
    { name: 'Moratuwa', id: '01234567890123456789abcd' },
    { name: 'Mount Lavinia', id: '01234567890123456789abaa' },
  ]

  // todo: get from database
  const drivers = [
    { name: 'Sahas', id: '01234567890123456789abab' },
    { name: 'Sapumal', id: '01234567890123456789abba' },
  ]

  // todo: get from database
  const vehicles = [
    { num: 'AB4041', id: '22234567890123456789abab' },
    { num: 'FE2021', id: '22334567890123456789abba' },
  ]

  // todo: get from database
  const items = [
    {
      name: 'Greean Apples',
      prod_id: '01234567890123456789aacd',
      batch_id: '11234567890123456789aacd',
    },
    {
      name: 'Samba Rice',
      prod_id: '01234567890123456789bbcd',
      batch_id: '21234567890123456789aacd',
    },
  ]

  // todo: get from session data
  const currentWarehouseId = '12345678901234567890baba'

  useEffect(() => setRemark(''), [])
  // todo: initialize other variables

  const addToList = () => {
    items.forEach(({ batch_id, prod_id, name }) => {
      if (name == item)
        setItemList([...itemList, { batch_id, prod_id, name, qty }])
    })
  }

  const createDelivery = () => {
    const delivery = {
      remark: remark,
      from: currentWarehouseId,
      to: FromOrTo,
      driver_id: driver,
      vehicle_id: vehicle,
      start_datetime: new Date(date + ' ' + time),
      end_datetime: new Date(date + ' ' + time),
    }
    console.log(delivery)
    axios
      .post('http://localhost:3000/api/delivery/create', delivery)
      .then((response) => this.setState({ articleId: response.data.id }))
  }

  return (
    <div className="flex max-w-full p-6 m-3 border border-teal-400 rounded-md justify-self-start">
      <form action="" className="w-5/6 p-6 m-3">
        <FormField>
          <FormLabel>Remark</FormLabel>
          <FormInput
            type="Text"
            value={remark}
            onChange={handleRemarkChange}
          />
        </FormField>

        <FormField>
          <FormLabel>Date</FormLabel>
          <FormInput type="date" value={date} onChange={handleDateChange} />
        </FormField>

        <FormField>
          <FormLabel>Time</FormLabel>
          <FormInput type="time" value={time} onChange={handleTimeChange} />
        </FormField>

        <FormField>
          <FormLabel>This delivery</FormLabel>
          <br />
          <div className="mb-3 bg-white rounded">
            <input
              className="mx-1 focus:outline-none"
              type="radio"
              name="startsfrom"
              value="true"
            />
            <label htmlFor="">Starts from my current warehouse</label>
          </div>
          <div className="w-full bg-white rounded">
            <input
              className="mx-1"
              type="radio"
              name="startsfrom"
              value="false"
            />
            <label htmlFor="">Ends at my current warehouse</label>
          </div>
        </FormField>

        <FormField>
          <FormLabel htmlFor="">To / From</FormLabel>
          <select
            className="w-full bg-white rounded"
            value={FromOrTo}
            onChange={handleFromTo}
          >
            {warehouses.map((warehouse, index) => {
              return <option value={warehouse.id}>{warehouse.name}</option>
            })}
          </select>
        </FormField>

        <FormField>
          <FormLabel htmlFor="">Driver</FormLabel>
          <select
            className="w-full bg-white rounded"
            value={driver}
            onChange={handleDriverChange}
          >
            {drivers.map((drive, index) => {
              return <option value={drive.id}>{drive.name}</option>
            })}
          </select>
        </FormField>

        <FormField>
          <FormLabel htmlFor="">Vehicle</FormLabel>
          <select
            className="w-full bg-white rounded"
            value={vehicle}
            onChange={handleVehicleChange}
          >
            {vehicles.map((vehicle, index) => {
              return <option value={vehicle.id}>{vehicle.num}</option>
            })}
          </select>
        </FormField>

        <FormField>
          <h1 className="text-white">Item list</h1>
          <hr className="mt-3 mb-5" />
          <FormTable>
            <tr>
              <FormTD>Batch ID</FormTD>
              <FormTD>Product ID</FormTD>
              <FormTD>product Name</FormTD>
              <FormTD>Quantity</FormTD>
            </tr>
            {itemList.map((itemInList) => {
              return (
                <tr>
                  <FormTD>{itemInList.batch_id}</FormTD>
                  <FormTD>{itemInList.prod_id}</FormTD>
                  <FormTD>{itemInList.name}</FormTD>
                  <FormTD>{itemInList.qty}</FormTD>
                </tr>
              )
            })}
          </FormTable>
        </FormField>
        <FormField className="flex justify-between">
          <select
            className="mr-10 bg-white rounded"
            value={item}
            onChange={handleItemChange}
          >
            {items.map((item, index) => {
              return <option value={item.id}>{item.name}</option>
            })}
          </select>

          <div className='flex content-center mr-10 align-middle'>
            <FormLabel>Quantity:</FormLabel>
            <FormInput type="text" value={qty} onChange={handleQtyChange} />
          </div>
          <button
            className="float-right w-16 h-8 text-black bg-white rounded"
            type="button"
            onClick={addToList}
          >
            Add
          </button>
        </FormField>
        <button
          className="p-2 rounded bg-slate-400"
          type="button"
          onClick={createDelivery}
        >
          Create Delivery
        </button>
      </form>
    </div>
  )
}

export default CraeteDelivery
