const supplierDetails = ({ supplier }) => {
  return (
    <div className="supplier-details">
      <h4>{supplier.business_name}</h4>
      <p>
        <strong>Email : </strong>
        {supplier.email}
      </p>
      <p>
        <strong>Rating : </strong>
        {supplier.rating}
      </p>
    </div>
  );
};

export default supplierDetails;
