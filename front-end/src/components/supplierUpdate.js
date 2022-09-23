import { useState } from "react";
import { useParams } from "react-router-dom";

const SupplierUpdate = () => {
  const [business_name, setBusiness_name] = useState("");
  const [cred_id, setCred_id] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [registered_products, setRegistered_products] = useState("");
  const [rating, setRating] = useState("");

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const supplier = {
      business_name,
      cred_id,
      address,
      email,
      phone,
      registered_products,
      rating,
    };
    console.log(supplier);
    const response = await fetch(
      "http://localhost:4000/api/supplier/putSupplier/" + id,
      {
        method: "PUT",
        body: JSON.stringify(supplier),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      // setError(json.error);
      console.log(json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h2 className="title">Update Supplier Details</h2>

      <label>setBusiness_name :</label>
      <input
        type="text"
        onChange={(e) => setBusiness_name(e.target.value)}
        value={business_name}
      />

      <label>setAddress :</label>
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />

      <label>setEmail:</label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>setPhone :</label>
      <input
        type="text"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />

      <label>setRegistered_products :</label>
      <input
        type="text"
        onChange={(e) => setRegistered_products(e.target.value)}
        value={registered_products}
      />

      <label>setRating :</label>
      <input
        type="text"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      />

      <label>setCred_id :</label>
      <input
        type="text"
        onChange={(e) => setCred_id(e.target.value)}
        // onChange={(e) => setCred_id("12345678901234567890abcd")}
        value={cred_id}
      />

      <button>Update Supplier</button>
      {/* {error && <div className="error"></div>} */}
    </form>
  );
};

export default SupplierUpdate;
