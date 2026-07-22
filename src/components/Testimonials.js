import React from 'react';
import { Typography, Box } from '@mui/material';
import './styles/Testimonials.css';
import { useTheme } from '@emotion/react';

const testimonials = [
  {
    name: 'Mike Demien',
    role: 'CEO of Yukmari',
    image: 'https://i.pravatar.cc/100?img=1',
    message:
      'Search and locate exactly what you need in no time. Our platform allows you to look through people, groups.',
  },
  {
    name: 'Cellia Rins',
    role: 'CTO of Maknyus',
    image: 'https://i.pravatar.cc/100?img=2',
    message:
      'Search and locate exactly what you need in no time. Our platform allows you to look through people, groups.',
  },
  {
    name: 'Dario',
    role: 'CEO of Mikucucu',
    image: 'https://i.pravatar.cc/100?img=3',
    message:
      'Search and locate exactly what you need in no time. Our platform allows you to look through people, groups.',
  },
  {
    name: 'Dinami Te',
    role: 'VP of Domdoom',
    image: 'https://i.pravatar.cc/100?img=4',
    message:
      'Search and locate exactly what you need in no time. Our platform allows you to look through people, groups.',
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      className="testimonial-section"
      sx={{
        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        py: 8,
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#ef7317',
          mb: 5,
        }}
        align="center"
      >
        What they think
      </Typography>

      <div className="testimonial-grid" sx={{
        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        py: 8,
        px: 2,
      }}>
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-user">
              <img src={t.image} alt={t.name} className="testimonial-avatar" />
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
            <p className="testimonial-message">{t.message}</p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Testimonials;
