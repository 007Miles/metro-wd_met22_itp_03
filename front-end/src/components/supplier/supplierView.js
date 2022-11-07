import { Link } from 'react-router-dom'

// import SupplierDetails from "./supplierDetails";

const supplierViews = ({ supplier }) => {
  return (
    <div className="container bg-gray-200 rounded-xl shadow border p-8 m-2">
      <h2>{supplier.business_name}</h2>

      <h4>Rating : {supplier.rating}</h4>

      <Link to={`/supplierDetails/${supplier._id}`}>
        <button
          className="hover:bg-red-600 text-white p-2 rounded cursor-pointer mt-1 bg-green-400 text-white p-2 rounded cursor-pointer m-auto"
          value={supplier._id}
          // onClick={(e) => {
          //   console.log(e.target.value);
          //   // <SupplierDetails key={supplier._id} supplier={supplier} />;
          // }}
        >
          View Details
        </button>
      </Link>
    </div>
  )
}

export default supplierViews
