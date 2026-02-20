const BASE_URL = "https://fakestoreapi.com";

async function handleJson(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json();
}

export async function fetchProducts(signal) {
  const res = await fetch(`${BASE_URL}/products`, { signal });
  return handleJson(res);
}

export async function fetchProductById(id, signal) {
  const res = await fetch(`${BASE_URL}/products/${id}`, { signal });
  return handleJson(res);
}
