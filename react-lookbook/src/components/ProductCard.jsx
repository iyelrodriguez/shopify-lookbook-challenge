function ProductCard({ product }) {
    return (
      <div>
        <img
          src={product.image}
          alt={product.title}
          width="250"
        />
  
        <h3>{product.title}</h3>
  
        <p>
          {product.currency} {product.price}
        </p>
  
        <p>
          Compare at: {product.currency} {product.compareAtPrice}
        </p>
      </div>
    );
  }
  
  export default ProductCard;