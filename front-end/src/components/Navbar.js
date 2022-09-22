import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="Nav_conrainer">
        <Link to="/supplierList">
          <button className="nav_btn">Supplier Management</button>
        </Link>
        <Link to="/supplierList">
          <button className="nav_btn">Supply Management</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
