import './ProductCards.css'
function ProductCards() {
  return (
    <>
      <h1 className='a'>Welcome to Experiment 3.1</h1>
      <div>
        <div className="card">
          <h2>Wireless Mouse</h2>
          <p>This is the description for Product 1.</p>
          <p>Price: $10.00</p>
          <p>In Stock</p>
        </div>
        <div className="card">
          <h2>Ear Phone</h2>
          <p>This is the description for Product 2.</p>
          <p>Price: $20.00</p>
          <p>Out of Stock</p>
        </div>
        <div className="card">
          <h2>Computer</h2>
          <p>This is the description for Product 3.</p>
          <p>Price: $30.00</p>
            <p>In Stock</p>
        </div>
      </div>
    </>
  );
}
export default ProductCards;
