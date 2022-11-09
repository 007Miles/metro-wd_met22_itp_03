import { Link } from 'react-router-dom'

// import SupplierDetails from "./supplierDetails";

const inspecReqViews = ({ inspecRequest }) => {
  return (
    <div className="supplier-details">
      <h4>{inspecRequest.description}</h4>
      <p>
        <strong>Priority : </strong>
        {inspecRequest.priority}
        <br />
        <strong>Status : </strong>
        {inspecRequest.status}
      </p>
      <Link to={`/inspecReqDetails/${inspecRequest._id}`}>
        <button
          className="hover:bg-red-600 text-white p-2 rounded cursor-pointer mt-1 bg-green-400 text-white p-2 rounded cursor-pointer m-auto"
          value={inspecRequest._id}
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

export default inspecReqViews
