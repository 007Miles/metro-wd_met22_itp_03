import Layout from '../components/layout'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Axiostest = () => {
  const [ delivery, setDelivery ] = useState({})
  const func = async () => {
      const res = await axios.get('http://localhost:3000/api/delivery/631f70146ac5c631540ff3d7')
      setDelivery(res.data.data)
  }
  useEffect(() => { func() }, [])

  return (
    <Layout>
      <p>{delivery.to}</p>
      <button onClick={func}>hello</button>
    </Layout>
  )
}

export default Axiostest
