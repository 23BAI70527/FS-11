import { useEffect, useState } from "react";
import { fetchProductById } from "../api/products";

export function useProduct(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError("");
        const product = await fetchProductById(id, controller.signal);
        setData(product);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [id]);

  return { data, loading, error };
}
