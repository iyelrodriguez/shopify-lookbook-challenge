import ProductGrid from "./ProductGrid";

function Lookbook({
  title,
  description,
  showDescription,
  showComparePrice,
  productsPerRow,
  paddingTop,
  paddingBottom,
  products,
}) {
  return (
    <section
      className="lookbook-homepage"
      style={{
        paddingTop,
        paddingBottom,
      }}
    >
      <div className="lookbook-header">
        <h2>{title}</h2>

        {showDescription && <p>{description}</p>}
      </div>

      <ProductGrid
        products={products}
        showComparePrice={showComparePrice}
        productsPerRow={productsPerRow}
      />
    </section>
  );
}

export default Lookbook;