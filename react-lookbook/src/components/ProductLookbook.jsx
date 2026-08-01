import ProductGrid from "./ProductGrid";

function ProductLookbook({
  title,
  products,
  showComparePrice,
}) {
  return (
    <section className="product-lookbook">
      <div className="lookbook-header">
        <h2>{title}</h2>
      </div>

      <ProductGrid
        products={products}
        showComparePrice={showComparePrice}
        productsPerRow={4}
      />
    </section>
  );
}

export default ProductLookbook;