import '../../styles/supplierList.css'
import { Link } from 'react-router-dom'
const SupplierNavbar = () => {
  return (
    <header>
      <div className="sidebarConrainer">
        <div className="sidebar">
          <Link to="/supplierList">
            <button className="hover:bg-red-600 text-white p-2 rounded cursor-pointer mt-1 bg-green-400 text-white p-2 rounded cursor-pointer m-auto">
              Supplier List
            </button>
          </Link>
          <br />
          <Link to="/supplierAddForm">
            <button className="hover:bg-red-600 text-white p-2 rounded cursor-pointer mt-1 bg-green-400 text-white p-2 rounded cursor-pointer m-auto">
              Add Supplier
            </button>
          </Link>
          <br />
          <Link to="/supplierMemberReqList">
            <button className="hover:bg-red-600 text-white p-2 rounded cursor-pointer mt-1 bg-green-400 text-white p-2 rounded cursor-pointer m-auto">
              Membership Requests
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SupplierNavbar
