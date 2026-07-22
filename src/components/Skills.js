// import { Box, Typography, Grid } from '@mui/material';

// const skillCategories = [
//   {
//     category: 'Languages',
//     skills: [
//       { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg' },
//       { name: 'SQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg' }, // Using MySQL icon as a general SQL icon
//     ],
//   },
//   {
//     category: 'Backend Development',
//     skills: [
//       { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/spring/spring-original.svg' },
//       { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/docker/docker-original.svg' }, // Using Docker as a proxy for Microservices
//       { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/graphql/graphql-plain.svg' },
//       { name: 'JDBC', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg' }, // Using Java icon as a proxy for JDBC
//       { name: 'Servlets', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg' }, // Using Java icon as a proxy for Servlets
//     ],
//   },
//   {
//     category: 'Frontend Development',
//     skills: [
//       { name: 'React.js', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg' },
//     ],
//   },
//   {
//     category: 'Database Management',
//     skills: [
//       { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg' },
//       { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/postgresql/postgresql-original.svg' },
//       { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mongodb/mongodb-original.svg' },
//     ],
//   },
//   {
//     category: 'Cloud & DevOps',
//     skills: [
//       { name: 'AWS Cloud Practitioner', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/amazonwebservices/amazonwebservices-original.svg' },
//       { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/docker/docker-original.svg' },
//       { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/kubernetes/kubernetes-plain.svg' },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <Box sx={{ bgcolor: '#1a1a1a', color: 'white', minHeight: '100vh', py: 4, px: 2 }}>
//       <Typography variant="h3" gutterBottom align="center">
//         My Skills
//       </Typography>
//       {skillCategories.map((category, index) => (
//         <Box key={index} sx={{ mb: 6 }}>
//           <Typography variant="h5" gutterBottom align="center" sx={{ color: '#00ff99' }}>
//             {category.category}
//           </Typography>
//           <Grid container spacing={4} sx={{ maxWidth: 800, mx: 'auto', justifyContent: 'center' }}>
//             {category.skills.map((skill, skillIndex) => (
//               <Grid item xs={6} sm={4} key={skillIndex} sx={{ textAlign: 'center' }}>
//                 <img src={skill.icon} alt={skill.name} style={{ width: 80, height: 80, marginBottom: 16 }} />
//                 <Typography variant="h6">{skill.name}</Typography>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Skills;



import { Box, Typography, Grid } from '@mui/material';
import './styles/Skills.css';

export const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/spring/spring-original.svg' },
      { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/docker/docker-original.svg' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/graphql/graphql-plain.svg' },
      { name: 'JDBC', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg' },
      { name: 'Servlets', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg' },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg' },
    ],
  },
  {
    category: 'Database Management',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'AWS Cloud Practitioner', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/kubernetes/kubernetes-plain.svg' },
    ],
  },
];

export const Skills = () => {
  return (
    <Box className="skills-container">
      <Typography variant="h4" gutterBottom align="center" sx={{
            fontWeight: 'bold',
            color:'#ef7317',
            mb:4
          }}>
        Professional Skills
      </Typography>
      {skillCategories.map((category, index) => (
        <Box key={index} className="category-container">
          <Box mb={4}>
  <Typography
    variant="h5"
    align="center"
    className="title"
        sx={{
                fontWeight: 'bold',
                my: 2,
                background: 'linear-gradient(90deg, #11b17d, #1a7e5c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '1.5px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
  >
    {category.category}
  </Typography>
</Box>
          <Grid container spacing={4} className="skills-grid" gutterBottom align="center">
            {category.skills.map((skill, skillIndex) => (
              <Grid item xs={6} sm={4} key={skillIndex} className="skill-item">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <Typography variant="h6">{skill.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;    








