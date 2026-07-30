export async function fetchProductsByHandles(handles) {

    console.log("Fetching products...");
    console.log(handles);

    return [

        {
            handle: "white-linen-shirt",
            title: "White Linen Shirt",
            price: "89.99",
            compareAtPrice: "109.99",
            currencyCode: "AUD",
            featuredImage:
                "https://placehold.co/400x500"
        },

        {
            handle: "blue-slim-fit-jeans",
            title: "Blue Slim Fit Jeans",
            price: "79.99",
            compareAtPrice: "99.99",
            currencyCode: "AUD",
            featuredImage:
                "https://placehold.co/400x500"
        }

    ];

}