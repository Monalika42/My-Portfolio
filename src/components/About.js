
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './styles/About.css';

const About = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
 
  return (
    
    <Box className="container" sx={{backgroundColor: isDarkMode ? '#000000' : '#ffffff'}}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color:'#ef7317'
            //color: isDarkMode ? '#ffffff' : '#000000',
          }}
        >
          Discover Who I am and What Drives Me.
        </Typography>
        {/* <Typography
          variant="subtitle1"
          sx={{ mt: 1, color: isDarkMode ? '#cccccc' : '#555555' }}
        >
          Get to know more about me, my interests, and my background.
        </Typography> */}
      </Box>
      <Grid container spacing={2} justifyContent="center" className="grid">
        {[
          {
            title: 'About Me',
            content:'I am a passionate Software Engineer dedicated to building innovative, efficient, and scalable solutions that solve real-world problems. With a strong foundation in coding and a continuous drive to learn, I thrive in dynamic environments that challenge my creativity and technical skills.',
          },
          {
            title: 'Interests',
            content: 'As an upcoming Software Engineer, I am passionate about coding, problem-solving, and building practical software solutions. I enjoy learning new technologies, exploring clean code practices, and improving my skills through real-world projects and continuous learning.',
          },
          {
            title: 'Hobbies',
            content: `My Passionate Pursuits Beyond Code
                💡Building Innovative personal projects  
                🌍Tech blogging and article writing
                🧠Problem Solving on Leetcode and etc..  
                📚Reading tech blogs/books  
                🏃‍♂️Staying active with Yoga and Jogging`,
          },
          {
            title: 'Education',
            content: 
            `🎓B.Tech – CSE 
            Annamacharya University,2026 CGPA:8.70 

            🏫Intermediate (10+2) 
            Narayana Junior College, 2022 with 78%

            👨‍🏫SSC (10th) 
            G.S.E.M.S, Nandyal, 2020 with 96%`
          },
          {
            title: 'Personal Information',
            content: 
            ` 🧑‍💼 Full Name: Monalika Neelam  
              🎂 Date of Birth: 14/09/2004  
              🚻 Gender: Female 
              🌐 Nationality: Indian  
              🗣️ Languages: English, Hindi, Telugu.   
              📧 Email ID: neelammonalika6964@email.com`,
          },
        ].map((item, index) => (
          
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="card">
              <CardContent className="content">
                <Typography variant="h5" className="title" align='center'>
                  {item.title}
                </Typography>
                <Typography variant="body1" className="description" align='center' style={{ whiteSpace: 'pre-line'}}>
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;

