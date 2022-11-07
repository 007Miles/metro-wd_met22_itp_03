import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList.js'
import UpdateProduct from './components/UpdateProduct.js'
import Navbar from './components/Navbar.js'
import ProductForm from './pages/ProductForm.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="product">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/ProductForm" element={<ProductForm />} />
            <Route path="/updateProduct/:id" element={<UpdateProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
