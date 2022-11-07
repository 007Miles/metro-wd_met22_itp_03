import { Routes, Route } from 'react-router-dom'

import Login from '../pages/login'
import About from '../pages/about'
import Axiostest from '../pages/axiostest'
import CraeteDelivery from '../pages/delivery'
import UpdateBatch from './components/UpdateBatch.js'
import Batch from './pages/Batch.js'
import BatchForm from './pages/BatchForm.js'

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/axiostest" element={<Axiostest />} />
      <Route path="/delivery" element={<CraeteDelivery />} />
      <Route path="/Batch" element={<Batch />} />
      <Route path="/batchForm" element={<BatchForm />} />
      <Route path="/UpdateBatch/:id" element={<UpdateBatch />} />
    </Routes>
  )
}

export default IndexRoutes
