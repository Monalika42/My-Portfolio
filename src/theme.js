import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'dark', // Force dark mode to match the design
    primary: { main: '#00BCD4' }, // Cyan/neon-green for buttons
    background: {
      default: '#1A237E', // Dark blue background
      paper: '#283593', // Slightly lighter blue for cards
    },
    text: {
      primary: '#FFFFFF', // White text for contrast
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
      textAlign: 'center',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00BCD4' },
    background: {
      default: '#1A237E',
      paper: '#283593',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
      textAlign: 'center',
    },
  },
});

export { lightTheme, darkTheme };