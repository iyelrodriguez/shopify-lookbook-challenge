import { useEffect, useState } from "react";

import Lookbook from "./components/Lookbook";
import { fetchProductsByHandles } from "./services/storefront";

function App() {
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

    fetchProductsByHandles(handles)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!settings) return null;

  if (loading) {
    return (
      <section
        className="lookbook-homepage"
        style={{
          paddingTop: settings.paddingTop,
          paddingBottom: settings.paddingBottom,
        }}
      >
        <div className="lookbook-header">
          <h2>{settings.title}</h2>

          {settings.showDescription && (
            <p>{settings.description}</p>
          )}
        </div>

        <p>Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="lookbook-homepage"
        style={{
          paddingTop: settings.paddingTop,
          paddingBottom: settings.paddingBottom,
        }}
      >
        <div className="lookbook-header">
          <h2>{settings.title}</h2>

          {settings.showDescription && (
            <p>{settings.description}</p>
          )}
        </div>

        <p>Unable to load products.</p>
      </section>
    );
  }

  return (
    <Lookbook
      {...settings}
      products={products}
    />
  );
}

export default App;