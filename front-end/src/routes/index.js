import { Routes, Route } from 'react-router-dom'

import Login from '../pages/login'
import About from '../pages/about'
import Axiostest from '../pages/axiostest'
import CraeteDelivery from '../pages/delivery'
import ProductList from '../pages/ProductList.js'
import UpdateProduct from '../components/UpdateProduct.js'
import ProductForm from '../pages/ProductForm.js'

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/axiostest" element={<Axiostest />} />
      <Route path="/delivery" element={<CraeteDelivery />} />
      <Route path="/" element={<ProductList />} />
      <Route path="/ProductForm" element={<ProductForm />} />
      <Route path="/updateProduct/:id" element={<UpdateProduct />} />
    </Routes>
  )
}

export default IndexRoutes
