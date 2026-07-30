
// --------------------------------------------------
// Shopify Storefront API Configuration
// --------------------------------------------------

const SHOPIFY_STORE_URL = "gil-sample-store.myshopify.com";
const STOREFRONT_API_TOKEN = "52789142490eeb87d856dcc774843bbc";


// --------------------------------------------------
// Lookbook Container
// --------------------------------------------------

const lookbookContainer = document.getElementById(
  "lookbook-products"
);

const showComparePrice =
  lookbookContainer?.dataset.showComparePrice === "true";

// --------------------------------------------------
// Fetch Products By Handles
//
// Currently using mock product data.
// This will be replaced with the actual
// Storefront API implementation later.
// --------------------------------------------------

// --------------------------------------------------
// Fetch Products By Handles
// --------------------------------------------------

async function fetchProductsByHandles(handles) {
  const products = [];

  for (const handle of handles) {
    const response = await fetch(
      `https://${SHOPIFY_STORE_URL}/api/2026-07/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token":
            STOREFRONT_API_TOKEN,
        },
        body: JSON.stringify({
          query: `
            query {
              product(handle: "${handle}") {
                title
                handle

                featuredImage {
                  url
                }

                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }

                compareAtPriceRange {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                }
              }
            }
          `,
        }),
      }
    );

    const data = await response.json();

    const product = data.data.product;

    // Skip invalid or unpublished products
    if (!product) continue;

    products.push({
      handle: product.handle,
      title: product.title,
      price: product.priceRange.minVariantPrice.amount,
      currencyCode:
        product.priceRange.minVariantPrice.currencyCode,
      compareAtPrice:
        product.compareAtPriceRange.maxVariantPrice?.amount ||
        null,
      featuredImage:
        product.featuredImage?.url ||
        "https://placehold.co/300x400",
    });
  }

  return products;
}

// --------------------------------------------------
// Render Products
// --------------------------------------------------

function renderProducts(products) {
  const container = document.getElementById(
    "lookbook-render-products"
  );

  container.innerHTML = "";

  products.forEach((product) => {
    container.innerHTML += `
      <div class="lookbook-product-card">

        <img
          src="${product.featuredImage}"
          alt="${product.title}"
        />

        <h3>${product.title}</h3>

        <p class="price">
          ${product.currencyCode} ${product.price}
        </p>

        ${
          showComparePrice && product.compareAtPrice
            ? `
              <p class="compare-price">
                ${product.currencyCode} ${product.compareAtPrice}
              </p>
            `
            : ""
        }

      </div>
    `;
  });
}

// --------------------------------------------------
// Initialize Lookbook
// --------------------------------------------------

if (lookbookContainer) {
  const productHandles =
    lookbookContainer.dataset.productHandles.split(",");

  fetchProductsByHandles(productHandles).then((products) => {
    renderProducts(products);
  });
}

