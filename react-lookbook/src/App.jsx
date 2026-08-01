import { useEffect, useState } from "react";
import Lookbook from "./components/Lookbook";
import { fetchProductsByHandles } from "./services/storefront";

function App() {
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const container = document.getElementById("lookbook-products");

    if (!container) return;

    const handles = container.dataset.productHandles.split(",");

    setSettings({
      title: container.dataset.title,
      description: container.dataset.description,
      showDescription:
        container.dataset.showDescription === "true",
      showComparePrice:
        container.dataset.showComparePrice === "true",
      productsPerRow: Number(
        container.dataset.productsPerRow
      ),
      paddingTop: Number(
        container.dataset.paddingTop
      ),
      paddingBottom: Number(
        container.dataset.paddingBottom
      ),
    });

    fetchProductsByHandles(handles).then(setProducts);
  }, []);

  if (!settings) return null;

  return (
    <Lookbook
      {...settings}
      products={products}
    />
  );
}

export default App;