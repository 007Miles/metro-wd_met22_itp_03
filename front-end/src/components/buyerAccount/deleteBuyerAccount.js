import { useEffect } from 'react'
import BuyerSignUpPage from '../../pages/buyerSignUpPage'
import { useLocation } from 'react-router-dom'

const BuyerDelete = () => {
  const { state } = useLocation()
  const { BuyerId } = state
  console.log(BuyerId)
  useEffect(() => {
    const deleteEmployee = async () => {
      fetch('http://localhost:3000/api/Buyer/deleteAccount/' + BuyerId, {
        method: 'DELETE',
      })
    }
    deleteEmployee()
  }, [BuyerId])
  return <BuyerSignUpPage />
}

export default BuyerDelete
