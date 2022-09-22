import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="conrainer">
        <Link to="/supplierList">
          <button>Supplier Management</button>
        </Link>
        <Link to="/supplierList">
          <button>Supply Management</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
