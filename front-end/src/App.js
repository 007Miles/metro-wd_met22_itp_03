import { BrowserRouter, Routes, Route } from "react-router-dom";

import SupplierList from "./pages/supplierList";
import Navbar from "./components/Navbar";
import PageHeader from "./components/Header";
import SupplierDetails from "./components/supplierDetails";
import SupplierNavbar from "./components/supplierNavbar";
import SupplierAddForm from "./components/supplierAddForm";
import SupplierRemove from "./components/supplierRemove";
import SupplierMail from "./components/supplierMail";
import SupplierUpdate from "./components/supplierUpdate";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader />
        <Navbar />
        <SupplierNavbar />
        <div className="pages">
          <Routes>
            <Route path="/supplierList" element={<SupplierList />} />
            <Route path="/supplierDetails/:id" element={<SupplierDetails />} />
            <Route path="/supplierDetails" element={<SupplierDetails />} />
            <Route path="/supplierAddForm" element={<SupplierAddForm />} />
            <Route path="/supplierRemove/:id" element={<SupplierRemove />} />
            <Route path="/supplierRemove" element={<SupplierRemove />} />
            <Route path="/supplierUpdate/:id" element={<SupplierUpdate />} />
            <Route path="/supplierUpdate" element={<SupplierUpdate />} />
            <Route path="/supplierMail/:id" element={<SupplierMail />} />
            <Route path="/supplierMail" element={<SupplierMail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
