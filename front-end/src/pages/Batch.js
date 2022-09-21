import { useEffect, useState } from "react";

import BatchDetails from "../components/BatchDetails.js";
import BatchForm from "../components/BatchForm";

const Batch = () => {
  const [batches, setBatches] = useState(null);

  useEffect(() => {
    const fetchBatch = async () => {
      const response = await fetch("http://localhost:4000/api/batch");
      const json = await response.json();

      if (response.ok) {
        setBatches(json);
      }
    };
    fetchBatch();
  }, []);

  return (
    <div className="batch">
      <div className="batches">
        {batches &&
          batches.map((batch) => (
            <BatchDetails key={batch._id} batch={batch} />
          ))}
      </div>
      <BatchForm />
    </div>
  );
};

export default Batch;
