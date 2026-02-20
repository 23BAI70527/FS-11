import { Box, Button, Divider, IconButton, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { formatMoney } from "../utils/format.js";

export default function Cart() {
  const { state, totalItems, totalPrice, removeFromCart, changeQty, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" fontWeight={700}>
          Cart
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          Your cart is empty.
        </Typography>
        <Button sx={{ mt: 2 }} component={Link} to="/products" variant="contained">
          Browse products
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" fontWeight={700}>
        Cart
      </Typography>

      <Box sx={{ mt: 2, display: "grid", gap: 2 }}>
        {state.items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "grid",
              gridTemplateColumns: "64px 1fr auto",
              gap: 2,
              alignItems: "center",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              p: 2,
            }}
          >
            <img src={item.image} alt={item.title} style={{ width: 64, height: 64, objectFit: "contain" }} />

            <Box>
              <Typography fontWeight={600} noWrap title={item.title}>
                {item.title}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {formatMoney(item.price)} each
              </Typography>

              <Box sx={{ mt: 1, display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
                <TextField
                  label="Qty"
                  type="number"
                  size="small"
                  value={item.qty}
                  inputProps={{ min: 1 }}
                  onChange={(e) => changeQty(item.id, Number(e.target.value))}
                  sx={{ width: 110 }}
                />
                <Typography sx={{ ml: 1 }} fontWeight={600}>
                  {formatMoney(item.qty * item.price)}
                </Typography>
              </Box>
            </Box>

            <IconButton aria-label="remove" onClick={() => removeFromCart(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box className="d-flex justify-content-between align-items-center flex-wrap gap-2">
        <Box>
          <Typography fontWeight={700}>Items: {totalItems}</Typography>
          <Typography variant="h6" fontWeight={800}>
            Total: {formatMoney(totalPrice)}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined" onClick={clearCart}>
            Clear
          </Button>
          <Button variant="contained">
            Checkout (demo)
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
