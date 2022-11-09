import { Routes, Route } from 'react-router-dom'

import Login from '../pages/login'
import About from '../pages/about'
import Axiostest from '../pages/axiostest'
import CraeteDelivery from '../pages/delivery'
import UpdateBatch from '../components/UpdateBatch.js'
import Batch from '../pages/Batch.js'
import BatchForm from '../pages/BatchForm.js'
import Home from '../pages/home'
import ProductList from '../pages/ProductList.js'
import UpdateProduct from '../components/UpdateProduct.js'
import ProductForm from '../pages/ProductForm.js'
import LeaveUpdateForm from '../pages/sanjula/update-leave-page'
import LeaveCreateForm from '../pages/sanjula//create-leave-page'
import LeaveList from '../pages/sanjula/leave-list-page'
import LeaveDelete from '../pages/sanjula/delete-leave-page'
import BuyerAccount from '../pages/buyerAccountView'
import BuyerProducts from '../pages/buyerProducts'
import BuyerSignUp from '../pages/buyerSignUpPage'
import UpdateBuyerPage from '../pages/updateBuyerPage'
import BuyerDelete from '../components/buyerAccount/deleteBuyerAccount'

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

      <Route path="/empHome" element={<Home />} />

      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/ProductForm" element={<ProductForm />} />
      <Route path="/updateProduct/:id" element={<UpdateProduct />} />

      <Route path="/createLeave" element={<LeaveCreateForm />} />
      <Route path="/viewAllLeaves" element={<LeaveList />} />
      <Route path="/deleteLeave" element={<LeaveDelete />} />
      <Route path="/updateLeave/:id" element={<LeaveUpdateForm />} />
      <Route path="/myProfile" element={<BuyerAccount />} />
      <Route path="/myProfile/products" element={<BuyerProducts />} />
      <Route path="/buyer/signup" element={<BuyerSignUp />} />
      <Route path="/buyer/accontUpdate" element={<UpdateBuyerPage />} />
      <Route path="/buyer/accontDelete" element={<BuyerDelete />} />
    </Routes>
  )
}

export default IndexRoutes
