import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar() {
  return (
    <>
      <style>
        {`
          .navbar-title {
            flex-grow: 1;
            font-weight: 600;
          }
        `}
      </style>

      <AppBar position="static" sx={{ boxShadow: 3 }}>
        <Toolbar>
          <Typography variant="h6" className="navbar-title">
            React UI Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
