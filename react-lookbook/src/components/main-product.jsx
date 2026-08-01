import React from "react";
import ReactDOM from "react-dom/client";
import ProductApp from "./ProductApp";

const root = document.getElementById(
  "product-lookbook-react-root"
);

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ProductApp />
    </React.StrictMode>
  );
}