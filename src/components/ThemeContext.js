
import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeToggleContext = createContext();
export const useThemeToggle = () => useContext(ThemeToggleContext);

const ThemeContextProvider = ({ children, pagePaletteOverrides = {} }) => {
  const [mode, setMode] = useState(localStorage.getItem('themeMode') || 'light');

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        ...(mode === 'dark'
          ? {
              background: {
                default: '#121212',
                paper: '#1f1f1f',
              },
              text: {
                primary: '#ffffff',
              },
            }
          : {}),
        ...pagePaletteOverrides, 
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
      },
    });
  }, [mode, pagePaletteOverrides]);

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeContextProvider;


