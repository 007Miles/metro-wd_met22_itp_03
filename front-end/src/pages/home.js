import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/layout/header'
import SideNavbar from '../components/sidenavbar-employee.component'
import EmployeeHome from '../pages/employee-home'
import EmployeeRegistrationForm from '../pages/create-employee-page'
import EmployeeUpdateForm from '../pages/update-employee-page'
import EmployeeList from '../pages/employee-list-page'
import EmployeeDelete from '../pages/delete-employee-page'
import WarehouseRegistrationForm from '../pages/create-warehouse-page'
import WarehouseList from '../pages/warehouse-list-page'
import WarehouseUpdateForm from './update-warehouse-page'
import WarehouseDelete from './delete-warehouse-page'
import EmployeeSalary from './employee-salary'
import EmployeeAttendance from '../pages/employee-attendance'
import EmployeSalaryList from './employee-salary-list'

const home = () => {
  return (
    <div>
      <Header />
      <div className="container flex">
        <SideNavbar />
        <Routes>

          <Route path="/" element={<EmployeeHome />}></Route>
          <Route path="/addEmployee" element={<EmployeeRegistrationForm />}></Route>
          <Route path="updateEmployee/:id" element={<EmployeeUpdateForm />}></Route>
          <Route path="/viewAllEmployees"  element={<EmployeeList />}></Route>
          <Route path="/deleteEmployee/:id" element={<EmployeeDelete />}></Route> 
          <Route path="/addWarehouse" element={<WarehouseRegistrationForm />}></Route>
          <Route  path="/viewAllWarehouses" element={<WarehouseList />}></Route>
          <Route path="/updateWarehouse/:id" element={<WarehouseUpdateForm />}></Route>
          <Route path="/deleteWarehouse/:id" element={<WarehouseDelete />}></Route>
          <Route path="/setSalary" element={<EmployeeSalary />}></Route>
          <Route path="/attendance" element={<EmployeeAttendance />}></Route>
          <Route path="/viewAllSalary" element={<EmployeSalaryList />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default home
