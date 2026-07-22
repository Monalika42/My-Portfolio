
// import React, { useState } from 'react';
// import { Box, Typography, Button, Avatar, IconButton } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon for dark mode
// import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon for light mode
// const Home = ({ skillCategories = [], projects = [] }) => {
//   const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };
  

//   // Calculate years of experience from start date to May 28, 2025, 11:51 PM IST
//   const startDate = new Date('2020-06-16'); // Replace with your actual career start date
//   const currentDate = new Date(); // Current date and time
//   const diffTime = Math.abs(currentDate - startDate);
//   const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//   const years = Math.floor(totalDays / 365);
//   const remainingDays = totalDays % 365;
//   const months = Math.floor(remainingDays / 30);
//   const days = remainingDays % 30;
//   const experience = `${years} yrs, ${months} m,${days} d`;

//   // Count technologies mastered from skillCategories
//   const technologiesCount = skillCategories.reduce((total, category) => total + category.skills.length, 0);

//   // Count completed projects (assuming all projects listed are completed)
//   const completedProjectsCount = projects.length;

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         bgcolor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
//         color: isDarkMode ? 'white' : '#333',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         px: 2,
//         transition: 'background-color 0.3s ease, color 0.3s ease',
//       }}
//     >
//       {/* Theme Toggle Button */}
//       <Box sx={{ position: 'fixed', bottom: 16, left: 16 }}>
//         <IconButton onClick={toggleTheme} sx={{ color: isDarkMode ? 'white' : '#333' }}>
//           {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//         </IconButton>
//       </Box>

//       {/* Hero Section */}
//       <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
//         <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
//           <Typography
//             variant="h2"
//             sx={{
//               fontWeight: 'bold',
//               my: 2,
//               background: 'linear-gradient(90deg, #ffffff 0%,rgb(39, 147, 104) 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               textShadow: '0 0 10px rgba(0, 255, 153, 0.5)',
//               letterSpacing: '2px',
//               transition: 'transform 0.3s ease-in-out',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//               },
//             }}
//           >
//             Software Developer
//           </Typography>
//           <Typography variant="h2" sx={{ fontWeight: 'bold', my: 2 }}>
//             Hello I'm <br /> D.Rajahussain
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               color: isDarkMode ? 'grey.400' : 'grey.700',
//               maxWidth: 400,
//             }}
//           >
//             I excel at crafting elegant digital experiences and I am proficient in various languages and technologies.
//           </Typography>
//           <Box sx={{ mt: 3 }}>
//             <a
//               href="/raja.pdf"
//               download="Rajahussain.pdf"
//               style={{ textDecoration: 'none' }}
//             >
//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: '#00ff99',
//                   color: isDarkMode ? '#1a1a1a' : '#fff',
//                   borderRadius: '50px',
//                   mr: 2,
//                   '&:hover': { bgcolor: '#00cc7a' },
//                 }}
//               >
//                 Download CV
//               </Button>
//             </a>
//            <IconButton sx={{ color: isDarkMode ? 'white' : '#333' }} href="https://github.com/Dudekula-Raja" target="_blank">
//               <GitHubIcon />
//             </IconButton>
//             <IconButton sx={{ color: isDarkMode ? 'white' : '#333' }} href="https://www.linkedin.com/in/draja-hussain/" target="_blank">
//               <LinkedInIcon />
//             </IconButton>            
//           </Box>
//         </Box>
//         <Box>
//           <Avatar
//             src="./raja2.png"
//             sx={{
//               width: 320,
//               height: 320,
//               border: `4px solid ${isDarkMode ? '#00ff99' : '#00cc7a'}`,
//               borderRadius: '50%',
//               boxShadow: isDarkMode ? '0 0 15px rgba(0, 255, 153, 0.5)' : '0 0 10px rgba(0, 204, 122, 0.3)',
//               transition: 'transform 0.3s ease-in-out, border 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//               },
//             }}
//           />
//         </Box>
//       </Box>

       

//       {/* Stats Section */}
//       <Box
//         sx={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           gap: 4,
//           mt: 5,
//           textAlign: 'center',
//         }}
//       >
//         <Box>
//           <Typography variant="h4" sx={{ fontWeight: 'bold', color: isDarkMode ? 'white' : '#333' }}>
//             {experience}
//           </Typography>
//           <Typography variant="body2" sx={{ color: isDarkMode ? 'grey.400' : 'grey.700' }}>
//             Years of Experience
//           </Typography>
//         </Box>
//         <Box>
//           <Typography variant="h4" sx={{ fontWeight: 'bold', color: isDarkMode ? 'white' : '#333' }}>
//             {completedProjectsCount}
//           </Typography>
//           <Typography variant="body2" sx={{ color: isDarkMode ? 'grey.400' : 'grey.700' }}>
//             Projects Completed
//           </Typography>
//         </Box>
//         <Box>
//           <Typography variant="h4" sx={{ fontWeight: 'bold', color: isDarkMode ? 'white' : '#333' }}>
//             {technologiesCount}
//           </Typography>
//           <Typography variant="body2" sx={{ color: isDarkMode ? 'grey.400' : 'grey.700' }}>
//             Technologies Mastered
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;












// import React from 'react';
// import { Box, Typography, Button, Avatar, IconButton } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// const Home = ({ skillCategories = [], projects = [] }) => {
//   // Calculate years of experience from start date to current date (June 11, 2025)
//   const startDate = new Date('2020-06-16'); // Replace with your actual career start date
//   const currentDate = new Date(); // Current date and time
//   const diffTime = Math.abs(currentDate - startDate);
//   const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//   const years = Math.floor(totalDays / 365);
//   const remainingDays = totalDays % 365;
//   const months = Math.floor(remainingDays / 30);
//   const days = remainingDays % 30;
//   const experience = `${years} yrs, ${months} m, ${days} d`;

//   // Count technologies mastered from skillCategories
//   const technologiesCount = skillCategories.reduce((total, category) => total + category.skills.length, 0);

//   // Count completed projects (assuming all projects listed are completed)
//   const completedProjectsCount = projects.length;

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         bgcolor: '#f5f5f5', // Default to light mode background
//         color: '#333', // Default to dark text for light background
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         px: 2,
//       }}
//     >
//       {/* Hero Section */}
//       <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
//         <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
//           <Typography
//             variant="h2"
//             sx={{
//               fontWeight: 'bold',
//               my: 2,
//               background: 'linear-gradient(90deg, #333 0%, rgb(39, 147, 104) 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               textShadow: '0 0 10px rgba(0, 255, 153, 0.5)',
//               letterSpacing: '2px',
//               transition: 'transform 0.3s ease-in-out',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//               },
//             }}
//           >
//             Software Developer
//           </Typography>
//           <Typography variant="h2" sx={{ fontWeight: 'bold', my: 2 }}>
//             Hello I'm <br /> D.Rajahussain
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               color: 'grey.700', // Light mode text color
//               maxWidth: 400,
//             }}
//           >
//             I excel at crafting elegant digital experiences and I am proficient in various languages and technologies.
//           </Typography>
//           <Box sx={{ mt: 3 }}>
//             <a
//               href="/raja.pdf"
//               download="Rajahussain.pdf"
//               style={{ textDecoration: 'none' }}
//             >
//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: '#00ff99',
//                   color: '#fff', // Button text color for light mode
//                   borderRadius: '50px',
//                   mr: 2,
//                   '&:hover': { bgcolor: '#00cc7a' },
//                 }}
//               >
//                 Download CV
//               </Button>
//             </a>
//             <IconButton sx={{ color: '#333' }} href="https://github.com/Dudekula-Raja" target="_blank">
//               <GitHubIcon />
//             </IconButton>
//             <IconButton sx={{ color: '#333' }} href="https://www.linkedin.com/in/draja-hussain/" target="_blank">
//               <LinkedInIcon />
//             </IconButton>
//           </Box>
//         </Box>
//         <Box>
//           <Avatar
//             src="./raja2.png"
//             sx={{
//               width: 320,
//               height: 320,
//               border: '4px solid #00cc7a', // Light mode border color
//               borderRadius: '50%',
//               boxShadow: '0 0 10px rgba(0, 204, 122, 0.3)', // Light mode shadow
//               transition: 'transform 0.3s ease-in-out, border 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//               },
//             }}
//           />
//         </Box>
//       </Box>

//       {/* Stats Section */}
//       <Box
//         sx={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           gap: 4,
//           mt: 5,
//           textAlign: 'center',
//         }}
//       >
//         <Box>
//           <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
//             {experience}
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'grey.700' }}>
//             Years of Experience
//           </Typography>
//         </Box>
//         <Box>
//           <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
//             {completedProjectsCount}
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'grey.700' }}>
//             Projects Completed
//           </Typography>
//         </Box>
//         <Box>
//           <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
//             {technologiesCount}
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'grey.700' }}>
//             Technologies Mastered
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;











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
            Raja Dudekula
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
            <a href="/raja.pdf" download="Rajahussain.pdf" style={{ textDecoration: 'none' }}>
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
              href="https://github.com/Dudekula-Raja"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'text.primary' }}
              href="https://www.linkedin.com/in/draja-hussain/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <Avatar
            src="./raja2.png"
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
