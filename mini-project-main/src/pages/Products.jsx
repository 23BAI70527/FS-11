import { useCallback, useMemo, useState } from "react";
import { Box, Grid, TextField, Typography, MenuItem, Chip } from "@mui/material";

import { useProducts } from "../hooks/useProducts.js";
import { useCart } from "../context/CartContext.jsx";
import LoadingState from "../components/LoadingState.jsx";
import ErrorState from "../components/ErrorState.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Products() {
  const { data, loading, error, categories } = useProducts();
  const { addToCart } = useCart();

  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const onAdd = useCallback(
    (product) => {
      addToCart(product);
    },
    [addToCart]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return data
      .filter((p) => (category === "all" ? true : p.category === category))
      .filter((p) => (q ? p.title.toLowerCase().includes(q) : true));
  }, [data, category, query]);

  if (loading) return <LoadingState title="Loading products..." />;
  if (error) return <ErrorState message={error} />;

  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
        <Typography variant="h4" fontWeight={700}>
          Products
        </Typography>
        <Chip label={`Showing ${filtered.length}`} />
      </Box>

      <Box sx={{ mt: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ minWidth: 220 }}
        >
          {categories.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Search title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ minWidth: 260, flex: 1 }}
        />
      </Box>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {filtered.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <ProductCard product={product} onAdd={onAdd} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
