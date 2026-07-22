
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
        '', // Replace with your EmailJS Service ID
        '', // get it from online platform EmailJS and create a emailtemplate
        form.current,
        '' // Replace with your EmailJS Public Key (User ID)
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
