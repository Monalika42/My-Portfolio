
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, useTheme} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles/Projects.css';

export const projects = [
  {
    title: 'OTP Generation & 2FA',
    description: 'Implemented OTP generation and two-factor authentication (2FA) using the Twilio platform to provide security in user authentication.',
    image: './2fa.png',
    link: '#',
    github: 'https://github.com/Dudekula-Raja/OTPAuthentication',
    technologies: ['Twilio', 'Spring Boot'],
  },
  {
    title: 'Image & File Upload System',
    description: 'Developed a feature allowing users to upload and manage images/files efficiently, ensuring secure storage and retrieval.',
    image: './fileupload.png',
    link: '#',
    github: 'https://github.com/Dudekula-Raja/File_Uploading',
    technologies: ['Java', 'Spring Boot', 'JPA'],
  },
  {
    title: 'MultiFactorAuthentication',
    description: 'Integration of multiple OAuth providers, which simplifies the process of implementing secure, multi-platform user authentication.',
    image: 'https://via.placeholder.com/300x300.png?text=CRUD+Operations',
    link: '#',
    github: 'https://github.com/Dudekula-Raja/MultiFactorAuthentication',
    technologies: ['Java', 'Spring Boot', 'JPA'],
  },
  {
    title: 'Automated Email Notifications for Course Registration',
    description: 'Configured an automated email system to notify students upon successful course enrollment, improving user experience and engagement.',
    image: './email.png',
    link: '#',
    github: '#',
    technologies: ['Java', 'Spring Boot', 'JPA'],
  },
  {
    title: 'Bank Loan System',
    description: 'USer can take loan for specific time and his favour of interest and other details etc.',
    image: 'https://via.placeholder.com/300x300.png?text=Database+Mappings',
    link: '#',
    github: 'https://github.com/Dudekula-Raja/Banking_System/tree/main/lendwise-loan-ledger-main',
    technologies: ['JavaScript', 'TypeScript', 'CSS'],
  },
  {
    title: 'IT_website',
    description: 'Website for an IT company to showcase their services and works.',
    image: 'https://via.placeholder.com/300x300.png?text=JS+React+Projects',
    link: '#',
    github: 'https://github.com/Dudekula-Raja/IT_website',
    technologies: ['JavaScript', 'TypeScript', 'CSS'],
  },
];

const Projects = () => {
  const theme=useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Box className="projects-container" sx={{backgroundColor: isDarkMode ? '#000000' : '#ffffff'}}>
      <Typography variant="h4" gutterBottom align="center"  sx={{
            fontWeight: 'bold',
            color:'#ef7317',
            mb:4
          }}>
        Project Showcase
      </Typography>
      <Grid container spacing={4} className="projects-grid"  >
        {projects.map((project, index) => (
          <Grid item xs={4} key={index} sx={{backgroundColor:isDarkMode? '#000000':'#00cc7a'}}>
            <Card className='project-card'>
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                className="project-image"
              />
              <CardContent className="project-content">
                <Typography variant="h6" gutterBottom className="project-title">
                  {project.title}
                </Typography>
                <Typography variant="body2" className="project-description">
                  {project.description}
                </Typography>
                <Box className="technologies-container">
                  {project.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      size="small"
                      className="tech-chip"
                    />
                  ))}
                </Box>
                <Box className="buttons-container">
                  <Button
                    size="small"
                    href={project.link}
                    target="_blank"
                    className="live-demo-button"
                  >
                    Live Demo
                  </Button>
                  <Button
                    size="small"
                    href={project.github}
                    target="_blank"
                    className="github-button"
                    startIcon={<GitHubIcon className="github-icon" />}
                  >
                    GitHub
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;