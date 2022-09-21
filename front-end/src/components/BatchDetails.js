const BatchDetails = ({ batch }) => {
  return (
    <div className="batch-details">
      <h4>{batch.prod_Name}</h4>
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
        <strong>Arrived Date</strong>
        {batch.arrived_date}
      </p>
      <p>
        <strong>Supplier Name</strong>
        {batch.supplier_Name}
      </p>
      <p>
        <strong>Buy Price</strong>
        {batch.buy_price}
      </p>
      <p>
        <strong>Sell Price</strong>
        {batch.sell_price}
      </p>
    </div>
  );
};
export default BatchDetails;
