import { Routes, Route, useLocation } from 'react-router-dom'
import Login from '../pages/login'
import Axiostest from '../pages/axiostest'
import CraeteDelivery from '../pages/delivery'

const IndexRoutes = () => {
  const location = useLocation()

  return (
      <Routes location={location}>
        <Route path="/login" element={<Login />} />
        <Route path="/axiostest" element={<Axiostest />} />
        <Route path="/delivery" element={<CraeteDelivery />} />
      </Routes>
  )
}

export default IndexRoutes