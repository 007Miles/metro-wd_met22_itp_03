import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <button className="view_btn">View Products</button>
        </Link>
        <Link to="/ProductForm">
          <button className="view_btn">Add a Product</button>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
