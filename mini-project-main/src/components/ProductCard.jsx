import React, { memo } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { formatMoney } from "../utils/format";

function ProductCard({ product, onAdd }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", p: 2 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight={600} noWrap title={product.title}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }} noWrap>
          {product.category}
        </Typography>

        <Typography variant="h6" sx={{ mt: 1 }}>
          {formatMoney(product.price)}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Button component={Link} to={`/products/${product.id}`} variant="outlined" fullWidth>
            Details
          </Button>
          <Button onClick={() => onAdd(product)} variant="contained" fullWidth>
            Add
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default memo(ProductCard);
