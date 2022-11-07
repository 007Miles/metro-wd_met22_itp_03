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
    </Routes>
  )
}

export default IndexRoutes
