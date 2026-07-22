
import { Box, Typography, Button, Avatar, IconButton,useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { projects } from './Projects';
import {skillCategories} from './Skills';

const Home = () => {

  const startDate = new Date('2024-01-16');
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - startDate);
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const years = Math.floor(totalDays / 365);
  const remainingDays = totalDays % 365;
  const months = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;
  const experience = `${years} yrs, ${months} m, ${days} d`;

  const technologiesCount = skillCategories.reduce(
    (total, category) => total + category.skills.length,
    0
  );
  const completedProjectsCount = projects.length;
const theme = useTheme();
const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
    
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
       
          <Typography variant="h2" sx={{ fontWeight: 'bold', my: 2, background: 'linear-gradient(90deg, #11b17d, #1a7e5c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: isDarkMode
                  ? '0 0 3px rgba(17, 177, 125, 0.4), 0 0 6px rgba(17, 177, 125, 0.3)'
                  : '0 0 1px rgba(0, 0, 0, 0.1)',
                letterSpacing: '1.5px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                }, }}>
            Monalika Neelam
          </Typography>
           <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                my: 2,
                background: 'linear-gradient(90deg, #11b17d, #1a7e5c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: isDarkMode
                  ? '0 0 3px rgba(229, 61, 24, 0.99), 0 0 6px rgba(17, 177, 125, 0.3)'
                  : '0 0 1px rgba(230, 90, 47, 0.88)',
                letterSpacing: '1.5px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              Software Developer
        </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 400,
            }}
          >
            I am an aspiring Software Engineer driven by curiosity, creativity, and a passion for solving real-world problems through code. I strive to turn ideas into impactful solutions while continuously learning and growing in the ever-evolving world of technology.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <a href="/resume.pdf" download="Monalika Neelam.pdf" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#00ff99',
                  color: '#1a1a1a',
                  borderRadius: '50px',
                  mr: 2,
                  '&:hover': { bgcolor: '#00cc7a' },
                }}
              >
                Download CV
              </Button>
            </a>
            <IconButton
              sx={{ color: 'text.primary' }}
              href="https://github.com/Monalika42"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'text.primary' }}
              href="https://www.linkedin.com/in/monalika-neelam/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <Avatar
            src="./img.png"
            sx={{
              width: 320,
              height: 320,
              border: '4px solid #00cc7a',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(0, 204, 122, 0.3)',
              transition: 'transform 0.3s ease-in-out, border 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          mt: 5,
          textAlign: 'center',
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {experience}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Years of Experience
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {completedProjectsCount}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Projects Completed
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {technologiesCount}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Technologies Mastered
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
