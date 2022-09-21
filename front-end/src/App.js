import { BrowserRouter, Routes, Route } from "react-router-dom";

import SupplierList from "./pages/supplierList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<SupplierList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
