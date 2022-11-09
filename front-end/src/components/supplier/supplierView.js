import { Link } from 'react-router-dom'

// import SupplierDetails from "./supplierDetails";

const supplierViews = ({ supplier }) => {
  return (
    <div className="container bg-gray-200 rounded-xl shadow border p-8 m-2">
      <h2 className="text-xl capitalize mr-5">{supplier.business_name}</h2>
      <h4>Rating : {supplier.rating}</h4>

      <Link to={`/supplierDetails/${supplier._id}`}>
        <button
          className="m-2 inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
