import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingState({ title = "Loading..." }) {
  return (
    <Box sx={{ py: 6, display: "grid", placeItems: "center", gap: 2 }}>
      <CircularProgress />
      <Typography color="text.secondary">{title}</Typography>
    </Box>
  );
}
