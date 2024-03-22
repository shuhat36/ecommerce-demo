export async function fetchProductData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
  }