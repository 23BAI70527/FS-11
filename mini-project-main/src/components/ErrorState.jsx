import { Alert, Box, Button } from "@mui/material";

export default function ErrorState({ message, onRetry }) {
  return (
    <Box sx={{ py: 3 }}>
      <Alert
        severity="error"
        action={
          onRetry ? (
            <Button color="inherit" size="small" onClick={onRetry}>
              Retry
            </Button>
          ) : null
        }
      >
        {message || "Something went wrong"}
      </Alert>
    </Box>
  );
}
