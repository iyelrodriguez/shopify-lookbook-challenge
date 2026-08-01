import { formatPrice } from "../utils/formatPrice";

function ProductCard({
  product,
  showComparePrice = true,
}) {
  return (
    <a
      href={`/products/${product.handle}`}
      className="lookbook-product-card"
    >
      <img
  loading="lazy"
  src={product.featuredImage}
  alt={product.title}
/>

      <h3>{product.title}</h3>

      <div className="lookbook-price">
        <span className="price">
          {formatPrice(
            product.price,
            product.currencyCode
          )}
        </span>

        {showComparePrice &&
          product.compareAtPrice && (
            <span className="compare-price">
              {formatPrice(
                product.compareAtPrice,
                product.currencyCode
              )}
            </span>
          )}
      </div>
    </a>
  );
}

export default ProductCard;