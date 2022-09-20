import { BrowserRouter, Routes, Route } from "react-router-dom";
import Batch from "./pages/Batch";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Batch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
