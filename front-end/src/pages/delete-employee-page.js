import { useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeList from  "./employee-list-page.js"

const EmployeeDelete = () => {
  
  const { id } = useParams();
  console.log(id)
  useEffect( () => {
    const deleteEmployee = async () => {
      fetch("http://localhost:3000/api/employee/deleteEmployee/" + id, {
        method: "DELETE",
      });
    };
    deleteEmployee();
  }, [id]);
  return <EmployeeList />;
}

export default EmployeeDelete