
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, useTheme} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles/Projects.css';

export const projects = [
  {
    title: 'Apple Leaf Disease Detection Using ViT',
    description: 'Developed a Vision Transformer (ViT)-based deep learning model to detect Apple Scab, Cedar Rust, and Black Rot, with a web interface for image upload and prediction visualization.',
    image: 'https://via.placeholder.com/300x300.png?text=Apple+Leaf+Disease+Detection',
    link: '#',
    github: 'https://github.com/Monalika42/Apple-Leaf-Disease-Detection-Using-ViT',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
  },
  {
    title: 'Chatbot using Gemini AI',
    description: 'Developed an AI-powered chatbot using the Gemini API, React.js, Python, and PostgreSQL, supporting multi-turn conversations and persistent chat history.',
    image: 'https://via.placeholder.com/300x300.png?text=Gemini+AI+Chatbot',
    link: '#',
    github: 'https://github.com/Monalika42/Chatbot-Using-Gemini-AI',
    technologies: ['Python', 'React', 'PostgreSQL'],
  },
  {
    title: 'Image & File Upload System',
    description: 'Developed a secure file upload application using Spring Boot and MySQL. Implemented REST APIs for upload, download, update, and delete operations with validation and metadata storage.',
    image: './fileupload.png',
    link: '#',
    github: 'https://github.com/Monalika42/Image-Upload',
    technologies: ['Spring Boot', 'MySQL'],
  },
  {
    title: 'Employee Enrollment System',
    description: 'Built a full-stack employee enrollment application using Spring Boot with CRUD operations and RESTful APIs following MVC architecture.',
    image: 'https://via.placeholder.com/300x300.png?text=Employee+Enrollment+System',
    link: '#',
    github: 'https://github.com/Monalika42/Employee-Enrollment-System',
    technologies: ['Spring Boot'],
  },
  {
    title: 'My Portfolio',
    description: 'Created a project showcase system with live code editing and customizable interfaces using React.js and JavaScript.',
    image: 'https://via.placeholder.com/300x300.png?text=My+Portfolio',
    link: '#',
    github: 'https://github.com/Monalika42/My-Portfolio',
    technologies: ['React', 'JavaScript'],
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
