import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/supplierList.css";
const SupplierDetails = () => {
  const [supplier, setSupplier] = useState({});

  const { id } = useParams();
  //
  const fetchSupplier = async () => {
    const response = await fetch(
      `http://localhost:4000/api/supplier/viewSupplier/` + id
    );
    const json = await response.json();
    if (response.ok) {
      setSupplier(json);

      console.log("in response");
      console.log(json);
    }
  };
  useEffect(() => {
    fetchSupplier();
  }, []);
  return (
    <div className="supplier-details">
      <h2 className="title">Supplier Details</h2>
      <h4>{supplier.business_name}</h4>
      <p>
        <strong>Address : </strong>
        {supplier.address}
      </p>
      <p>
        <strong>Email : </strong>
        {supplier.email}
      </p>
      <p>
        <strong>phone : </strong>
        {supplier.phone[1]}
      </p>
      <p>
        <strong>registered_products : </strong>
        {supplier.registered_products[1]}
      </p>
      <p>
        <strong>Rating : </strong>
        {supplier.rating}
      </p>
    </div>
  );
};

export default SupplierDetails;
