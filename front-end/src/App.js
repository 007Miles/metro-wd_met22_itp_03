import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Batch from './pages/Batch'
import BatchForm from './pages/BatchForm'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Batch />} />
            <Route path="/batchForm" element={<BatchForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
