import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'

const BuyerDetails = (props) => {
  const [Buyer, setBuyer] = useState({})

  let navigate = useNavigate()
  const { state } = useLocation()
  const { id } = state

  const loadBuyerUpdateAccount = () => {
    navigate('/buyer/accontUpdate', { state: { BuyerId: id } })
    console.log('View page', id)
  }

  const loadBuyerDeleteAccount = () => {
    navigate('/buyer/accontDelete', { state: { BuyerId: id } })
    console.log('View page delete', id)
  }

  const fetchBuyer = async () => {
    const response = await fetch(
      `http://localhost:3000/api/Buyer/viewAccount/` + id
    )
    const json = await response.json()
    if (response.ok) {
      setBuyer(json)
    }
  }
  useEffect(() => {
    fetchBuyer()
  }, [])

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <p>
        <strong>Company Name : </strong>
        {Buyer.businessName}
      </p>
      <br></br>
      <p>
        <strong>Email : </strong>
        {Buyer.email}
      </p>
      <br></br>
      <p>
        <strong>phone : </strong>
        {Buyer.mobile}
      </p>
      <br></br>
      <p>
        <strong>Address : </strong>
        {Buyer.address}
      </p>
      <br></br>
      <p>
        <strong>City : </strong>
        {Buyer.city}
      </p>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={loadBuyerUpdateAccount}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Update
      </button>
      <button
        onClick={loadBuyerDeleteAccount}
        class="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Delete
      </button>
    </div>
  )
}
export default BuyerDetails
