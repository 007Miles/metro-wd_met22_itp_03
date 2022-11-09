import { useState } from 'react'
import { BrowserRouter, json, Link, useNavigate } from 'react-router-dom'

const BuyerRegForm = () => {
  const [businessName, setbusinessName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [address_line2, setAddressLine2] = useState('')
  const [city, setCity] = useState('')

  let navigate = useNavigate()

  const loadBuyerAccount = (x) => {
    navigate('/myProfile', { state: { id: x } })
    console.log('hhshshs', x)
  }

  const handleSubmit = async (e) => {
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

    const req = 'http://localhost:3000/api/Buyer/createAccount'
    const option = {
      method: 'POST',
      body: JSON.stringify(buyer),
      headers: { 'Content-Type': 'application/json' },
    }

    const response = await fetch(req, option)
    const jsonO = await response.json()

    console.log(jsonO)
    if (!response.ok) {
      console.log('respose error')
    }

    if (response.ok) {
      setbusinessName('')
      setUsername('')
      setEmail('')
      setpassword('')
      setConfirmPassword('')
      setPhone('')
      setAddress('')
      setAddressLine2('')
      setCity('')

      console.log('New buyer registed', jsonO)
      console.log('Buyer id is:', jsonO._id)
    }
    loadBuyerAccount(jsonO._id)
  }

  return (
    <div className="container bg-slate-200 rounded-xl shadow border p-8 m-10">
      <form onSubmit={handleSubmit}>
        <h1 className="place-items-center">Registration Form</h1>
        <div className="container bg-slate-200 rounded-xl shadow border p-8 m-10 justify-center">
          <table border="2px">
            <tr>
              <td>
                <label>Business Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setbusinessName(e.target.value)}
                  value={businessName}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Username:</label>
              </td>
              <td>
                {' '}
                <input
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Confirm Password:</label>
              </td>
              <td>
                <input
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={ConfirmPassword}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone:</label>
              </td>
              <td>
                <input
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Address:</label>
              </td>
              <td>
                <input
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Address Line 2:</label>
              </td>
              <td>
                <input
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setAddressLine2(e.target.value)}
                  value={address_line2}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>City:</label>
              </td>
              <td>
                <input
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
              </td>
            </tr>
          </table>
        </div>
        <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default BuyerRegForm
