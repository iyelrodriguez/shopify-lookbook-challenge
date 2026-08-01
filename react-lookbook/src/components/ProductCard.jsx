function ProductCard({
  product,
  showComparePrice = true,
}) {
  return (
    <div className="lookbook-product-card">
      <img
        src={product.featuredImage}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>
        {product.currencyCode} {product.price}
      </p>

            {showComparePrice && product.compareAtPrice && (
        <p className="compare-price">
          {product.currency} {product.compareAtPrice}
        </p>
)}
    </div>
  );s
}

export default ProductCard;