import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/layout/header'
import SideNavbar from '../components/sidenavbar-employee.component'
import EmployeeHome from './employee-home'
import EmployeeRegistrationForm from './create-employee-page'
import EmployeeUpdateForm from './update-employee-page'
import EmployeeList from './employee-list-page'
import EmployeeDelete from './delete-employee-page'
import WarehouseRegistrationForm from './create-warehouse-page'
import WarehouseList from './warehouse-list-page'
import WarehouseUpdateForm from './update-warehouse-page'
import WarehouseDelete from './delete-warehouse-page'
import EmployeeSalary from './employee-salary'
import EmployeeAttendance from './employee-attendance'
import EmployeSalaryList from './employee-salary-list'
import EmployeeDetails from './employee-details'
import EmployeeCalendar from './employee-calendar'
import EmployeeReport from './employee-report'

const EmployeeRouterHome = () => {
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
          <Route path="/viewEmployeeDetails" element={<EmployeeDetails />}></Route>
          <Route path="/calendar" element={<EmployeeCalendar />}></Route>
          <Route path="/report" element={<EmployeeReport />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default EmployeeRouterHome
