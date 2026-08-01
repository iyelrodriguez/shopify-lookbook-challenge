console.log("Product Lookbook JS Loaded");

function initializeProductLookbook() {
  const productLookbook = document.getElementById("product-lookbook");

  if (!productLookbook) {
    console.log("Product Lookbook container not found.");
    return;
  }

  const currentHandle = productLookbook.dataset.productHandle;

  console.log("Current Product:");
  console.log(currentHandle);
}

// Initial page load
document.addEventListener("DOMContentLoaded", initializeProductLookbook);

// Shopify Theme Editor section reloads
document.addEventListener("shopify:section:load", initializeProductLookbook);