import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// import Navbar from "./components/navbar-employee.component";
import SideNavbar from "./components/sidenavbar-employee.component";
// import EmployeeHome from "./components/employee-home.component"
import EmployeeRegistrationForm from "./pages/create-employee-page";
import EmployeeUpdateForm from "./pages/update-employee-page";
import EmployeeList from "./pages/employee-list-page";
import EmployeeDelete from "./pages/delete-employee-page";
import WarehouseRegistrationForm from "./pages/create-warehouse-page";
import WarehouseList from "./pages/warehouse-list-page";
import WarehouseUpdateForm from "./pages/update-warehouse-page";
import WarehouseDelete from "./pages/delete-warehouse-page";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="flex">
      
        <SideNavbar />
        <div className="container">
          <Routes>
            {/* <Route path="/employee-home" element={ <EmployeeHome /> }></Route> */}
            <Route path="/addEmployee" element={  <EmployeeRegistrationForm /> }></Route>
            <Route path="/updateEmployee/:id" element={  <EmployeeUpdateForm /> }></Route>
            <Route path="/viewAllEmployees" element={ <EmployeeList />}></Route>
            <Route path="/deleteEmployee/:id" element={ <EmployeeDelete />}></Route>
            <Route path="/addWarehouse" element={  <WarehouseRegistrationForm /> }></Route>
            <Route path="/viewAllWarehouses" element={  <WarehouseList /> }></Route>
            <Route path="/updateWarehouse/:id" element={  <WarehouseUpdateForm /> }></Route> 
            <Route path="/deleteWarehouse/:id" element={ <WarehouseDelete />}></Route>

          </Routes>
        </div>
 </div>

      </Router>
    );
  }
}
export default App;

