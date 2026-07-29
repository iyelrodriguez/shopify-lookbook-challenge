import Lookbook from "./components/Lookbook";
import { products } from "./data/mockProducts";
import { lookbooks } from "./data/mockLookbooks";

function App() {
  const summerCollection = lookbooks[0];

  const lookbookProducts = products.filter((product) =>
    summerCollection.productHandles.includes(
      product.handle
    )
  );

  return (
    <Lookbook
      title={summerCollection.title}
      description={summerCollection.description}
      products={lookbookProducts}
    />
  );
}

export default App;