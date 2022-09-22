import { Link } from "react-router-dom";

// import SupplierDetails from "./supplierDetails";

const supplierViews = ({ supplier }) => {
  return (
    <div className="supplier-details">
      <h4>{supplier.business_name}</h4>
      <p>
        <strong>Rating : </strong>
        {supplier.rating}
      </p>
      <Link to={`/supplierDetails/${supplier._id}`}>
        <button
          value={supplier._id}
          onClick={(e) => {
            console.log(e.target.value);
            // <SupplierDetails key={supplier._id} supplier={supplier} />;
          }}
        >
          View
        </button>
      </Link>
    </div>
  );
};

export default supplierViews;
