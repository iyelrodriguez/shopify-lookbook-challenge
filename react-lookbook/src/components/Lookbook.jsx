import ProductGrid from "./ProductGrid";

function Lookbook({ title, description, products }) {
  return (
    <div>
      <h1>{title}</h1>

      <p>{description}</p>

      <ProductGrid products={products} />
    </div>
  );
}

export default Lookbook;