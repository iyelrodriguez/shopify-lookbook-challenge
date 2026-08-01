import { useEffect, useState } from "react";
import ProductLookbook from "./components/ProductLookbook";
import { fetchProductsByHandles } from "./services/storefront";

function ProductApp() {
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const container = document.getElementById(
      "product-lookbook"
    );

    if (!container) return;

    const handles =
      container.dataset.productHandles.split(",");

    setSettings({
      title: container.dataset.title,
      showComparePrice:
        container.dataset.showComparePrice === "true",
    });

    fetchProductsByHandles(handles).then(setProducts);
  }, []);

  if (!settings) return null;

  return (
    <ProductLookbook
      title={settings.title}
      products={products}
      showComparePrice={settings.showComparePrice}
    />
  );
}

export default ProductApp;