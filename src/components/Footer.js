import { Box, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#0f1b6a', color: 'white', py: 2, textAlign: 'center' }}>
      <IconButton sx={{ color: 'white', '&:hover': { color: '#00ff99' } }} href="https://github.com" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton sx={{ color: 'white', '&:hover': { color: '#00ff99' } }} href="https://linkedin.com" target="_blank">
          <LinkedInIcon />
        </IconButton>
      <Box sx={{ mb: 2 }}>
        <Link href="/" color="inherit" sx={{ mx: 1, '&:hover': { color: '#00ff99' } }}>
          Home
        </Link>
        <Link href="/about" color="inherit" sx={{ mx: 1, '&:hover': { color: '#00ff99' } }}>
          About
        </Link>
        <Link href="/projects" color="inherit" sx={{ mx: 1, '&:hover': { color: '#00ff99' } }}>
          Projects
        </Link>
        <Link href="/contact" color="inherit" sx={{ mx: 1, '&:hover': { color: '#00ff99' } }}>
          Contact
        </Link>
      </Box>
      <Box>
        
        <Typography variant="body2" sx={{ mb: 2 }}>
        © {new Date().getFullYear()} DLS. All Rights Reserved.
      </Typography>
      </Box>
    </Box>
  );
};

export default Footer;