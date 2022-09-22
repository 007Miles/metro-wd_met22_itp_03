import "../styles/supplierList.css";
import { Link } from "react-router-dom";
const SupplierNavbar = () => {
  return (
    <header>
      <div className="sidebarConrainer">
        <div className="sidebar">
          <Link to="/supplierList">
            <button className="side_btn">Supplier List</button>
          </Link>
          <br />
          <Link to="/supplierAddForm">
            <button className="side_btn">Add Supplier</button>
          </Link>
          <br />
          <Link to="/">
            <button className="side_btn">Membership Requests</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SupplierNavbar;
