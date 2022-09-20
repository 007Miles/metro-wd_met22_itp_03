const BatchDetails = ({ batch }) => {
  return (
    <div className="batch-details">
      <h4>{batch.prod_id}</h4>
      <p>
        <strong>Quantity: </strong>
        {batch.quantity}
      </p>
      <p>
        <strong>Exp Date</strong>
        {batch.exp_date}
      </p>
      <p>
        <strong>Manu Date</strong>
        {batch.manu_date}
      </p>
      <p>
        <strong>Exp Date</strong>
        {batch.exp_date}
      </p>
    </div>
  );
};
export default BatchDetails;
