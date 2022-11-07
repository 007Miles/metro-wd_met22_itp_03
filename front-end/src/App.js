import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Batch from './pages/Batch.js'
import BatchForm from './pages/BatchForm.js'
import Navbar from './components/Navbar.js'
import UpdateBatch from './components/UpdateBatch.js'
import ProductList from './pages/ProductList.js'
import UpdateProduct from './components/UpdateProduct.js'
import ProductForm from './pages/ProductForm.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/ViewBatch" element={<Batch />} />
            <Route path="/batchForm" element={<BatchForm />} />
            <Route path="/UpdateBatch/:id" element={<UpdateBatch />} />
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

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// // import './App.css'
// import Batch from './pages/Batch.js'
// import BatchForm from './pages/BatchForm.js'
// import Navbar from './components/Navbar.js'
// import UpdateBatch from './components/UpdateBatch.js'

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//         <div className="pages">
//           <Routes>
//             <Route path="/" element={<Batch />} />
//             <Route path="/batchForm" element={<BatchForm />} />
//             <Route path="/UpdateBatch/:id" element={<UpdateBatch />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App
