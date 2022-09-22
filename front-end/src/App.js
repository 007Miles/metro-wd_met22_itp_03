import { BrowserRouter, Routes, Route } from "react-router-dom";

import SupplierList from "./pages/supplierList";
import Navbar from "./components/Navbar";
import SupplierDetails from "./components/supplierDetails";
import SupplierNavbar from "./components/supplierNavbar";
import SupplierAddForm from "./components/supplierAddForm";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SupplierNavbar />
        <div className="pages">
          <Routes>
            <Route path="/supplierList" element={<SupplierList />} />
            <Route path="/supplierDetails/:id" element={<SupplierDetails />} />
            <Route path="/supplierDetails" element={<SupplierDetails />} />
            <Route path="/supplierAddForm" element={<SupplierAddForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
