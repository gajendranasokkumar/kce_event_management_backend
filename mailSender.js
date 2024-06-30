const nodemailer = require('nodemailer');

async function sendEmail() {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: '717822p215@kce.ac.in',
        pass: ''
      }
    });

    const mailOptions = {
      from: '717822p215@kce.ac.in',
      to: 'ragniranjanaa@gmail.com',
      subject: 'Heyy Nirans yeeeeee',
      text: 'Intha Email ah na node module use pannu code eluthi send pannuren , code ah google la ta eduththen'
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// sendEmail();
