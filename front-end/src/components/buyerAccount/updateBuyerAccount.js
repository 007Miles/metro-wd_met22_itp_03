import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

export default function EmployeeUpdateForm() {
  const [businessName, setbusinessName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [address_line2, setAddressLine2] = useState('')
  const [city, setCity] = useState('')

  const { state } = useLocation()
  const { BuyerId } = state

  const Update = async (e) => {
    e.preventDefault()

    const buyer = {
      businessName,
      username,
      email,
      password,
      ConfirmPassword,
      phone,
      address,
      address_line2,
      city,
    }
    console.log(buyer)
    const response = await fetch(
      'http://localhost:3000/api/Buyer/updateAccount/' + BuyerId,

      {
        method: 'PUT',
        body: JSON.stringify(buyer),
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
      .get('http://localhost:3000/api/Buyer/viewAccount/' + BuyerId)
      .then((response) => {
        console.log(response)
        let json = response.data
        setbusinessName(json.businessName)
        setUsername(json.username)
        setAddress(json.address)
        setPhone(json.phone)
        setAddressLine2(json.address_line2)
        setConfirmPassword(json.ConfirmPassword)
        //   setGender(json.gender)
        //   setWareId(json.wareId)
        setCity(json.city)
        setEmail(json.email)
      })
  }, [BuyerId])

  return (
    <div className="container bg-green-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl">Update My Account</h1>
      <div className="mt-6 space-y-6">
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label className="sr-only">Company Name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Company Name"
              onChange={(e) => {
                setbusinessName(e.target.value)
              }}
              value={businessName}
            />
          </div>
          <div>
            <label className="sr-only">Username</label>
            <input
              id="Username"
              name="Username"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Userame"
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              value={username}
            />
          </div>
          <div>
            <label className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value)
              }}
              value={password}
            />
          </div>
          <div>
            <label className="sr-only">Confirm Password</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Confirm password"
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
              value={ConfirmPassword}
            />
          </div>
          {/* <div>
            <label className="sr-only">Employee ID</label>
            <input
              id="empId"
              name="employeeID"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Employee ID"
              onChange={(e) => {
                setCredId(e.target.value)
              }}
              value={cred_id}
            />
          </div>
          <div>
            <label className="sr-only">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Address"
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              value={address}
            />
          </div>
          <div>
            <label className="sr-only">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Phone"
              onChange={(e) => {
                setNumber(e.target.value)
              }}
              value={phone}
            />
          </div>

          <div>
            <label className="sr-only">Date Of Birth</label>
            <input
              id="dob"
              name="dob"
              type="date"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Dob"
              onChange={(e) => {
                setDob(e.target.value)
              }}
              value={dob}
            />
          </div>
          <div>
            <label className="sr-only">NIC</label>
            <input
              id="nic"
              name="nic"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Nic"
              onChange={(e) => {
                setNic(e.target.value)
              }}
              value={nic}
            />
          </div>
          <div>
            <label className="sr-only">Gender</label>
            <input
              id="gender"
              name="gender"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Gender"
              onChange={(e) => {
                setGender(e.target.value)
              }}
              value={gender}
            />
          </div>
          <div>
            <label className="sr-only">WareHouse ID</label>
            <input
              id="wareId"
              name="wareHouseID"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="WareHouse ID"
              onChange={(e) => {
                setWareId(e.target.value)
              }}
              value={wareId}
            />
          </div>
          <div>
            <label className="sr-only">Role</label>
            <input
              id="role"
              name="role"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Role"
              onChange={(e) => {
                setRole(e.target.value)
              }}
              value={role}
            />
          </div>*/}
          <div>
            <label className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
            />
          </div>
          <div>
            <label className="sr-only">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Phone"
              onChange={(e) => {
                setPhone(e.target.value)
              }}
              value={phone}
            />
          </div>
          <div>
            <label className="sr-only">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Address"
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              value={address}
            />
          </div>
          <div>
            <label className="sr-only">Address Line 2</label>
            <input
              id="addressLine2"
              name="addressLine2"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Address Line2"
              onChange={(e) => {
                setAddressLine2(e.target.value)
              }}
              value={address_line2}
            />
          </div>
          <div>
            <label className="sr-only">city</label>
            <input
              id="city"
              name="city"
              type="text"
              required
              className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="City"
              onChange={(e) => {
                setCity(e.target.value)
              }}
              value={city}
            />
          </div>

          <br></br>
          <div>
            <button
              onClick={Update}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
