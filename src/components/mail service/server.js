// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/send-email', async (req, res) => {
//   const { name, email, message } = req.body;

//   // Configure transporter with Gmail
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'rajadudekula35@gmail.com', // your Gmail
//       pass: 'raja@123A',     // use App Password from Gmail
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: 'rajadudekula35@gmail.com',
//     subject: `New message from ${name}`,
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Failed to send email' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
