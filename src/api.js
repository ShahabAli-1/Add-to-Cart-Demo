export async function fetchProducts() {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiToken = import.meta.env.VITE_API_TOKEN;

  if (!apiUrl || !apiToken) {
    throw new Error(
      "API_URL or API_TOKEN is not defined. Check your .env.local file."
    );
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": apiToken,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(
      `Error fetching data: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.data.products.edges.map((edge) => ({
    id: edge.node.id,
    title: edge.node.title,
    image: edge.node.images.edges[0]?.node.url,
    price: edge.node.variants.edges[0]?.node.price.amount,
    currency: edge.node.variants.edges[0]?.node.price.currencyCode,
  }));
}
