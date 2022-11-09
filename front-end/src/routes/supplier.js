import { Routes, Route } from 'react-router-dom'

import SupplierList from '../pages/supplierList'
import InspecReqList from '../pages/inspecReqList'
// import Navbar from '../components/supplier/Navbar'
// import PageHeader from '../components/supplier/Header'
import SupplierDetails from '../components/supplier/supplierDetails'
// import SupplierNavbar from '../components/supplier/supplierNavbar'
import SupplierAddForm from '../components/supplier/supplierAddForm'
import SupplierRemove from '../components/supplier/supplierRemove'
import SupplierMail from '../components/supplier/supplierMail'
import SupplierUpdate from '../components/supplier/supplierUpdate'
import SupMemberReqList from '../components/supplier/supMemberReqList'
import MemberReqDetails from '../components/supplier/memberReqDetails'

function Supplier() {
  // const location = useLocation();
  return (
    <Routes>
      <Route path="/supplierList" element={<SupplierList />} />
      <Route path="/inspecReqList" element={<InspecReqList />} />
      <Route path="/supplierDetails/:id" element={<SupplierDetails />} />
      <Route path="/supplierDetails" element={<SupplierDetails />} />
      <Route path="/supplierAddForm" element={<SupplierAddForm />} />
      <Route path="/supplierRemove/:id" element={<SupplierRemove />} />
      <Route path="/supplierRemove" element={<SupplierRemove />} />
      <Route path="/supplierUpdate/:id" element={<SupplierUpdate />} />
      <Route path="/supplierUpdate" element={<SupplierUpdate />} />
      <Route path="/supplierMail/:id" element={<SupplierMail />} />
      <Route path="/supplierMail" element={<SupplierMail />} />
      <Route path="/supMemberReqList" element={<SupMemberReqList />} />
      <Route path="/memberReqDetails" element={<MemberReqDetails />} />
      <Route path="/memberReqDetails/:id" element={<MemberReqDetails />} />
    </Routes>
  )
}

export default Supplier
