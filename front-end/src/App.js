import { BrowserRouter, Routes, Route } from "react-router-dom";

import SupplierList from "./pages/supplierList";
import Navbar from "./components/Navbar";
import SupplierDetails from "./components/supplierDetails";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/supplierList" element={<SupplierList />} />
            <Route path="/supplierDetails/:id" element={<SupplierDetails />} />
            <Route path="/supplierDetails" element={<SupplierDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
