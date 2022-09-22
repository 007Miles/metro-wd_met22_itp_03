import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SupplierList from "../pages/supplierList";

const SupplierRemove = () => {
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

      // console.log("in response");
      // console.log(json);
    }
  };
  useEffect(() => {
    fetchSupplier();
  }, []);
  //
  return <SupplierList />;
};

export default SupplierRemove;
