import ProductCard from "./ProductCard";

function ProductGrid({
  products,
  showComparePrice,
  productsPerRow,
}) {
  return (
    <div
      className="lookbook-grid"
      style={{
        gridTemplateColumns: `repeat(${productsPerRow}, 1fr)`,
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.handle}
          product={product}
          showComparePrice={showComparePrice}
        />
      ))}
    </div>
  );
}

export default ProductGrid;