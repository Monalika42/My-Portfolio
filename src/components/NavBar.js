

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeToggle } from './ThemeContext';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
 const { toggleTheme, mode } = useThemeToggle();
  // 👉 Check if the screen is below 600px
  const isMobile = useMediaQuery('(max-width:599px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
    { text: 'Skills', path: '/skills' },
    { text: 'Courses and Internships', path: '/courses' },
    { text: 'Testimonials', path: '/testimonials' },
  ];

  const drawer = (
    <div>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" className="navbar-title">
          
          </Typography>

          {/* ✅ Show only when screen is mobile */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="menu-icon"
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop nav menu */}
          <div className="desktop-menu">
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
                className="nav-button"
              >
                {item.text}
              </Button>
            ))}
            <Button
              variant="contained"
              className="hire-button"
              component={Link}
              to="/contact"
            >
              Hire Me
            </Button>
          </div>


          
           <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>



        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="mobile-drawer"
      >
        {drawer}
      </Drawer>



    </>
  );
};

export default Navbar;
