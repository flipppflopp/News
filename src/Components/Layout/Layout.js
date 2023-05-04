import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import "./Layout.css"

function Layout() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">
          <Link to="/" className='link'>Main Page</Link>
        </Button>
        <Button color="inherit">
          <Link to="/ten-articles"  className='link'>Ten Articles</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Layout;
