import { useEffect, useState } from "react";

import ProductLookbook from "./components/ProductLookbook";
import { fetchProductsByHandles } from "./services/storefront";

function ProductApp() {
  const [lookbooks, setLookbooks] = useState([]);

  useEffect(() => {
    const containers = document.querySelectorAll(
      ".product-lookbook-data"
    );

    if (!containers.length) return;

    Promise.all(
      Array.from(containers).map(async (container) => {
        const handles = container.dataset.productHandles
          .split(",")
          .map((h) => h.trim())
          .filter(Boolean);

        const currentHandle =
          container.dataset.currentHandle;

        const products =
          await fetchProductsByHandles(handles);

        return {
          title: container.dataset.title,

          showComparePrice:
            container.dataset.showComparePrice ===
            "true",

          products: products.filter(
            (product) =>
              product.handle !== currentHandle
          ),
        };
      })
    ).then(setLookbooks);
  }, []);

  if (!lookbooks.length) return null;

  return (
    <>
      {lookbooks.map((lookbook, index) => (
        <ProductLookbook
          key={index}
          title={lookbook.title}
          products={lookbook.products}
          showComparePrice={
            lookbook.showComparePrice
          }
        />
      ))}
    </>
  );
}

export default ProductApp;