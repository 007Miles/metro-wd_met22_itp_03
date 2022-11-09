import { Routes, Route } from 'react-router-dom'

import Login from '../pages/login'
import About from '../pages/about'
import Axiostest from '../pages/axiostest'
import CraeteDelivery from '../pages/delivery'
import ScheduleSupply from '../pages/scheduleSupply'
import ViewSchedule from '../pages/viewSchedules'
import UpdateSchedules from '../pages/updateSchedule'
import CancelSchedules from '../pages/cancelSchedules'
import SupplierMembershipRequest from '../pages/supplierMembershipRequest'
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

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/axiostest" element={<Axiostest />} />
      <Route path="/delivery" element={<CraeteDelivery />} />
      <Route path="/scheduleSupply" element={<ScheduleSupply />} />
      <Route path="/Viewschedules" element={<ViewSchedule />} />
      <Route path="/Updateschedule" element={<UpdateSchedules />} />
      <Route path="/Cancelschedule" element={<CancelSchedules />} />
      <Route path="/SupMemRequest" element={<SupplierMembershipRequest />} />
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
    </Routes>
  )
}

export default IndexRoutes
