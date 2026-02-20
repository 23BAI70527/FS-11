import { Box, Button, Chip, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import LoadingState from "../components/LoadingState.jsx";
import ErrorState from "../components/ErrorState.jsx";
import { useProduct } from "../hooks/useProduct.js";
import { useCart } from "../context/CartContext.jsx";
import { formatMoney } from "../utils/format.js";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, loading, error } = useProduct(id);
  const { addToCart } = useCart();

  if (loading) return <LoadingState title="Loading product..." />;
  if (error) return <ErrorState message={error} />;
  if (!data) return <ErrorState message="Product not found" />;

  return (
    <Box sx={{ py: 2 }}>
      <Button component={Link} to="/products" variant="text">
        ← Back to products
      </Button>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mt: 2 }}>
        <Box
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            p: 2,
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={data.image} alt={data.title} style={{ maxWidth: "100%", maxHeight: 360, objectFit: "contain" }} />
        </Box>

        <Box>
          <Typography variant="h4" fontWeight={700}>
            {data.title}
          </Typography>

          <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
            <Chip label={data.category} />
            <Chip label={formatMoney(data.price)} color="primary" />
          </Box>

          <Typography sx={{ mt: 2 }} color="text.secondary">
            {data.description}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button variant="contained" onClick={() => addToCart(data)}>
              Add to cart
            </Button>
            <Button component={Link} to="/cart" variant="outlined">
              Go to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
