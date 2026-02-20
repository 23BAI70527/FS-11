import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={800}>
        404
      </Typography>
      <Typography sx={{ mt: 1 }} color="text.secondary">
        Page not found.
      </Typography>
      <Button sx={{ mt: 2 }} component={Link} to="/" variant="contained">
        Go Home
      </Button>
    </Box>
  );
}
