import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/ViewBatch">
          <button className="view_btch_btn">View batches</button>
        </Link>
        <Link to="/BatchForm">
          <button className="add_btch_btn">Add a batch</button>
        </Link>
        <Link to="/">
          <button className="view_pdct_btn">View Products</button>
        </Link>
        <Link to="/ProductForm">
          <button className="add_prdct_btn">Add a Product</button>
        </Link>
      </div>
    </header>
  )
}
export default Navbar
