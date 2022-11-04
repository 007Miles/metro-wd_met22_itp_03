import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SupplierList from "../../pages/supplierList";

const SupplierRemove = () => {
  //   const [supplier, setSupplier] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const deleteSupplier = async () => {
      fetch("http://localhost:4000/api/supplier/deleteSupplier/" + id, {
        method: "DELETE",
      });
      //   .then(() => setStatus("Delete successful"));
    };

    deleteSupplier();
  }, []);
  //
  return <SupplierList />;
};

export default SupplierRemove;
