import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../api/products";

export function useProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError("");
        const products = await fetchProducts(controller.signal);
        setData(products);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  // derived info (small example)
  const categories = useMemo(() => {
    const set = new Set(data.map((p) => p.category));
    return ["all", ...Array.from(set)];
  }, [data]);

  return { data, loading, error, categories };
}
