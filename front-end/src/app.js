// import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom'
import IndexRoutes from './routes'
// import LeaveCreateForm from './pages/sanjula/create-leave-page';
// import LeaveList from "./pages/sanjula/leave-list-page";
// import LeaveUpdateForm from "./pages/sanjula/update-leave-page";
// import leaveDelete from "./pages/sanjula/delete-leave-page";



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App

{/*         <Route path="/createLeave" element={  <LeaveCreateForm /> }></Route>
            <Route path="/viewAllLeaves" element={<LeaveList /> }></Route>
            <Route path="/updateLeave" element={<LeaveUpdateForm/> }></Route>
            <Route path="/deleteLeave" element={<leaveDelete/>}></Route> */}
