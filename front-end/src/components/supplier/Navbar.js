import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
      <div className="bg-green-900 flex justify-center h-12">
        <Link to="/supplierList">
          <button className="py-2 px-6 font-bold text-white rounded-none cursor-pointer m-auto hover:bg-green-400">
            Supplier Management
          </button>
        </Link>
        <Link to="/inspecReqList">
          <button className="py-2 px-6 font-bold text-white rounded-none cursor-pointer m-auto hover:bg-green-400">
            Supply Management
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
