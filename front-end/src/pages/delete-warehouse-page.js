import { useEffect } from "react";
import { useParams } from "react-router-dom";
import WarehouseList from  "./warehouse-list-page"

const WarehouseDelete = () => {
  
  const { id } = useParams();
  console.log(id)
  useEffect( () => {
    const deleteWarehouse = async () => {
      fetch("http://localhost:3000/api/warehouse/deleteWarehouse/" + id, {
        method: "DELETE",
      });
    };
    deleteWarehouse();
  }, [id]);
  return <WarehouseList />;
}

export default WarehouseDelete