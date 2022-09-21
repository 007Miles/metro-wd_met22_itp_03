import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="conrainer">
        <Link to="/">
          <h1>Supplier Management</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
