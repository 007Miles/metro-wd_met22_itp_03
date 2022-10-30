import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProductList from './pages/ProductList.js'
import Navbar from './components/Navbar.js'
//import ProductForm from './pages/ProductForm.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="product">
          <Routes>
            <Route path="/" element={<ProductList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
