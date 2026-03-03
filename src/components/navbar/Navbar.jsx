import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Badge, Icon, Link } from '@mui/material';
import useAuthStore from '../../store/useAuthStore.js';

export default function Navbar() {
const token =useAuthStore((state)=>state.token);
const logout =useAuthStore((state)=>state.logout);
const navigate =useNavigate();
const handleLogout = () => {
logout();
navigate('/login');
};

return (
<Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        KASHOP
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 ,alignItems: 'center' }}>
        <Link component={RouterLink} to="/" color="inherit" underline='none'>Home</Link>
        {
        token?(<>
          <IconButton color="inherit" component={RouterLink} to="/cart">
            <Badge color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <Link component={'button'} onClick={handleLogout} color="inherit" underline='none'>logout</Link>
        </>)
        :
        (
        <>
          <Link component={RouterLink} to="/login" color="inherit" underline='none'>Login</Link>
          <Link component={RouterLink} to="/register" color="inherit" underline='none'>Register</Link>
        </>) }

      </Box>
      <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} color="inherit">

        <MenuIcon />
      </IconButton>
    </Toolbar>

  </AppBar>
</Box>
);
}