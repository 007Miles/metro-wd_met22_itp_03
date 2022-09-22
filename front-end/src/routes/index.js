import { Routes, Route, useLocation } from 'react-router-dom'
import Login from '../pages/login'

const Routes = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Routes