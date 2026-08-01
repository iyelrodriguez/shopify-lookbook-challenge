
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ProductApp from "./ProductApp";

// Homepage Lookbook
const homepageRoot = document.getElementById(
  "lookbook-react-root"
);

if (homepageRoot) {
  ReactDOM.createRoot(homepageRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Product Page Lookbook
const productRoot = document.getElementById(
  "product-lookbook-react-root"
);

if (productRoot) {
  ReactDOM.createRoot(productRoot).render(
    <React.StrictMode>
      <ProductApp />
    </React.StrictMode>
  );
}