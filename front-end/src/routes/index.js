import { Routes, Route, useLocation } from 'react-router-dom'
import Login from '../pages/login'

const IndexRoutes = () => {
  const location = useLocation()

  return (
      <Routes location={location}>
        <Route path="/login" element={<Login />} />
      </Routes>
  )
}

export default IndexRoutes