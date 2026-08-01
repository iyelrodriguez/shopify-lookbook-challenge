
const SHOPIFY_STORE_URL = "gil-sample-store.myshopify.com";
const STOREFRONT_API_TOKEN = "52789142490eeb87d856dcc774843bbc";


export async function fetchProductsByHandles(handles) {
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

    const json = await response.json();

    const product = json.data.product;

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