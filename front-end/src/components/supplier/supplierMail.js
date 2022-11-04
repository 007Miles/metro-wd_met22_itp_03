import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SupplierMail = () => {
  const [business_name, setBusiness_name] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [cred_id, setCred_id] = useState("");
  const [phone, setPhone] = useState("");
  const [registered_products, setRegistered_products] = useState("");
  const [rating, setRating] = useState("");

  const [supplier, setSupplier] = useState({});
  const { id } = useParams();

  const fetchSupplier = async () => {
    const response = await fetch(
      `http://localhost:4000/api/supplier/viewSupplier/` + id
    );
    const json = await response.json();
    if (response.ok) {
      setSupplier(json);
    }
  };
  useEffect(() => {
    fetchSupplier();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const supplierMsg = {
      business_name,
      cred_id,
      description,
      address,
      email,
      phone,
      registered_products,
      rating,
    };
    console.log(supplierMsg);
    const response = await fetch(
      "http://localhost:4000/api/supplierMailer/send",
      {
        method: "POST",
        body: JSON.stringify(supplierMsg),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      // setError(json.error);
    }
    console.log(json);

    setBusiness_name(supplier.business_name);
    setCred_id(supplier.cred_id);
    setAddress(supplier.address);
    setEmail(supplier.email);
    setPhone(supplier.phone);
    setRegistered_products(supplier.registered_products);
    setRating(supplier.rating);
  };

  return (
    <div className="supplier-details">
      <form className="create" onSubmit={handleSubmit}>
        <h2 className="title">Send Mail</h2>
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
          {supplier.phone}
        </p>
        <p>
          <strong>registered_product : </strong>
          {supplier.registered_products}
        </p>
        <p>
          <strong>Rating : </strong>
          {supplier.rating}
        </p>
        <label>Description :</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <button className="btn">Send Mail</button>
        {/* {error && <div className="error"></div>} */}
      </form>
    </div>
  );
};

export default SupplierMail;
