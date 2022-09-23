import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <button className="view_btn">View batches</button>
        </Link>
        <Link to="/BatchForm">
          <button className="view_btn">Add a batch</button>
        </Link>
      </div>
    </header>
  )
}
export default Navbar
