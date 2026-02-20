import { Container, Box } from "@mui/material";
import NavBar from "./NavBar.jsx";

export default function AppLayout({ children }) {
  return (
    <Box>
      <NavBar />
      <Container maxWidth="lg" sx={{ py: 3 }}>
        {children}
      </Container>

      <footer className="py-4 border-top mt-5">
        <Container maxWidth="lg">
          <div className="d-flex justify-content-between align-items-center">
            <small>Mini Commerce SPA</small>
            <small className="text-muted">Context + Reducer + API + Performance</small>
          </div>
        </Container>
      </footer>
    </Box>
  );
}
