import { Routes, Route } from 'react-router-dom'

import Login from '../pages/login'
import About from '../pages/about'
import Axiostest from '../pages/axiostest'
import CraeteDelivery from '../pages/delivery'
import Home from '../pages/home'

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/axiostest" element={<Axiostest />} />
      <Route path="/delivery" element={<CraeteDelivery />} />

      <Route path="/empHome" element={<Home />} />
    </Routes>
  )
}

export default IndexRoutes
