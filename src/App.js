import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
//import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Courses from './components/Courses';
import { Box } from '@mui/material';
import Navbar from './components/NavBar';
import ThemeContextProvider from './components/ThemeContext';
import Testimonials from './components/Testimonials';
// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: { main: '#00ff99' },
//     background: { default: '#1a1a1a' },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//   },
// });

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
             
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;

