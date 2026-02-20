import { AppBar, Toolbar, Typography, IconButton, Badge, Button, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function NavBar() {
  const { totalItems } = useCart();
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <AppBar position="sticky">
      <Toolbar className="d-flex justify-content-between">
        <Box className="d-flex align-items-center gap-2">
          <StorefrontIcon />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            Mini Commerce
          </Typography>
        </Box>

        <Box className="d-flex align-items-center gap-2">
          <Button
            component={Link}
            to="/products"
            color={isActive("/products") ? "secondary" : "inherit"}
            variant="text"
          >
            Products
          </Button>

          <IconButton component={Link} to="/cart" color="inherit" aria-label="cart">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
