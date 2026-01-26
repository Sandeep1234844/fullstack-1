// ProductCard Component
// Demonstrates: Card Component Pattern with Props

function ProductCard({ productName, price, description, inStock, imageUrl }) {
  return (
    <div className="product-card">
      {/* Conditional rendering for product image */}
      {imageUrl ? (
        <div className="product-image">
          <img src={imageUrl} alt={productName} />
        </div>
      ) : (
        <div className="product-image-placeholder">
          <span>📦</span>
        </div>
      )}
      
      <div className="product-info">
        <h3 className="product-name">{productName}</h3>
        <p className="product-description">{description}</p>
        
        <div className="product-footer">
          <span className="product-price">${price}</span>
          
          {/* Conditional rendering for stock status */}
          {inStock ? (
            <span className="stock-badge in-stock">In Stock</span>
          ) : (
            <span className="stock-badge out-of-stock">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

