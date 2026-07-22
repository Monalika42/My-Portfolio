import React, { useState } from 'react';
import {
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './styles/Courses.css';

const coursesData = [
  {
    id: 1,
    title: "Spring Boot with GraphQL",
    description: "Learn to build scalable APIs using Spring Boot integrated with GraphQL.",
    certificateImage: "",
  },
  {
    id: 2,
    title: "Spring Boot with Microservices",
    description: "Master microservices architecture using Spring Boot for distributed systems.",
    certificateImage: "",
  },
  {
    id: 3,
    title: "Spring Boot",
    description: "Master microservices architecture using Spring Boot for distributed systems.",
    certificateImage: "",
  },
];

const internshipsData = [
  {
    id: 1,
    title: "Internship on AWS",
    description: "Gained hands-on experience with AWS cloud services and infrastructure.",
    certificateImage: "/certificates/aws-internship-certificate.png",
  },
  {
    id: 2,
    title: "Workshop on Advanced Python",
    description: "Explored advanced Python programming techniques and best practices.",
    certificateImage: "/certificates/advanced-python-certificate.png",
  },
  {
    id: 3,
    title: "Workshop on AI/ML",
    description: "Learned the fundamentals of Artificial Intelligence and Machine Learning algorithms.",
    certificateImage: "/certificates/aiml-certificate.png",
  },
];

const hackerrankcertify = [
  {
    id: 1,
    title: "Nodejs  (Basic)",
    description: "Certified in basic problem solving by HackerRank.",
    certificateImage: "",
  },
  {
    id: 2,
    title: "Java (Basic)",
    description: "Certified Java developer with intermediate skills.",
    certificateImage: "/certificates/hackerrank-java-intermediate.png",
  },
  {
    id: 3,
    title: "Python (Basic)",
    description: "Certified in basic Python programming by HackerRank.",
    certificateImage: "",
  },
  {
    id: 4,
    title: "SQL (Basic)",
    description: "Certified in basic SQL by HackerRank.",
    certificateImage: "",
  },
];

const Courses = ({ internships = internshipsData }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const completedCourses = coursesData.length;
  const completedInternships = internships.length;
  const completedHackerRank = hackerrankcertify.length;

  const handleViewCertificate = (certificateImage, title) => {
    setSelectedImage(certificateImage);
    setSelectedTitle(title);
    setOpen(true);
  };

  return (
    <div className="courses-container">
      <Typography variant='h4' align='center' sx={{
            fontWeight: 'bold',
            color:'#ef7317',
            mb:4
          }}>
        Courses and Internships
      </Typography>

      <div className="courses-stats">
        <p className="stats-text">
          Courses Completed: <span className="stats-highlight">{completedCourses}</span>
        </p>
        <p className="stats-text">
          Internships Completed: <span className="stats-highlight">{completedInternships}</span>
        </p>
        <p className="stats-text">
          HackerRank Certifications: <span className="stats-highlight">{completedHackerRank}</span>
        </p>
      </div>

      {/* Courses Section */}
      <h2 className="section-title">Courses</h2>
      <div className="courses-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-header">
              <h2 className="course-title">{course.title}</h2>
              <IconButton
                className="certificate-icon"
                onClick={() => handleViewCertificate(course.certificateImage, course.title)}
              >
                <VisibilityIcon />
              </IconButton>
            </div>
            <p className="course-description">{course.description}</p>
          </div>
        ))}
      </div>

      {/* Internships Section */}
      <h2 className="section-title">Internships</h2>
      <div className="courses-grid">
        {internships.map((internship) => (
          <div key={internship.id} className="course-card">
            <div className="course-header">
              <h2 className="course-title">{internship.title}</h2>
              <IconButton
                className="certificate-icon"
                onClick={() => handleViewCertificate(internship.certificateImage, internship.title)}
              >
                <VisibilityIcon />
              </IconButton>
            </div>
            <p className="course-description">{internship.description}</p>
          </div>
        ))}
      </div>

      {/* HackerRank Certifications Section */}
      <h2 className="section-title">HackerRank Certifications</h2>
      <div className="courses-grid">
        {hackerrankcertify.map((cert) => (
          <div key={cert.id} className="course-card">
            <div className="course-header">
              <h2 className="course-title">{cert.title}</h2>
              <IconButton
                className="certificate-icon"
                onClick={() => handleViewCertificate(cert.certificateImage, cert.title)}
              >
                <VisibilityIcon />
              </IconButton>
            </div>
            <p className="course-description">{cert.description}</p>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{selectedTitle}</DialogTitle>
        <DialogContent>
          <img
            src={selectedImage}
            alt={selectedTitle}
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Courses;
