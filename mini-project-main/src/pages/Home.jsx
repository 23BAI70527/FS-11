import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={700}>
        Build a production-style SPA
      </Typography>
      <Typography sx={{ mt: 2 }} color="text.secondary">
        API integration, Context + Reducer state flow, reusable components, and performance patterns.
      </Typography>

      <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
        <Button component={Link} to="/products" variant="contained">
          Go to Products
        </Button>
        <Button component={Link} to="/cart" variant="outlined">
          View Cart
        </Button>
      </Box>
    </Box>
  );
}
