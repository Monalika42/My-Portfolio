
import React, { useRef } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser'; 
import './styles/Contact.css';

const Contact = () => {
  const form = useRef(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_1il126c', // Replace with your EmailJS Service ID
        'template_8xr3wlr', // get it from online platform EmailJS and create a emailtemplate
        form.current,
        'dPRf3aONpXpB8-EDS' // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };
  return (
    <Box className="contact-container">
      <Typography variant="h4" gutterBottom align="center" sx={{
            fontWeight: 'bold',
            color:'#ef7317',
            mb:4
          }}>
        Get in Touch
      </Typography>
      <Box className="form-container">
        <form ref={form} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            margin="normal"
            required
            className="text-field"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            required
            className="text-field"
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            required
            className="text-field"
          />
          <Button
            type="submit"
            variant="contained" align="center"
            className="submit-button"
            sx={{ display: 'block', margin: '0 auto' }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;






// import React, { useRef, useState } from 'react';
// import { Box, Typography, TextField, Button } from '@mui/material';
// import axios from 'axios';
// import './styles/Contact.css';

// const Contact = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/send-email', formData);
//       alert('Message sent successfully!');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       alert('Failed to send message.');
//       console.error(error);
//     }
//   };

//   return (
//     <Box className="contact-container">
//       <Typography variant="h3" gutterBottom align="center">
//         Contact Me
//       </Typography>
//       <Box className="form-container">
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             variant="outlined"
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             type="email"
//             variant="outlined"
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             variant="outlined"
//             margin="normal"
//             multiline
//             rows={4}
//             required
//           />
//           <Button type="submit" variant="contained" className="submit-button">
//             Send Message
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default Contact;
