import ProductGrid from "./ProductGrid";

function ProductLookbook({
  title,
  products,
  showComparePrice,
}) {
  return (
    <section className="product-lookbook">

      <div className="lookbook-header">
        <h2>Complete the Look</h2>

        <p>{title}</p>
      </div>

      <ProductGrid
        products={products}
        showComparePrice={showComparePrice}
        productsPerRow={3}
      />

    </section>
  );
}

export default ProductLookbook;