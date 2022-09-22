import "../styles/supplierList.css";
import { Link } from "react-router-dom";
const SupplierNavbar = () => {
  return (
    <header>
      <div className="sidebarConrainer">
        <div className="sidebar">
          <Link to="/supplierList">
            <button className="btn">Supplier List</button>
          </Link>
          <Link to="/supplierAddForm">
            <button className="btn">Add Supplier</button>
          </Link>
          <Link to="/supplierAddForm">
            <button className="btn">Send Mail</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SupplierNavbar;
