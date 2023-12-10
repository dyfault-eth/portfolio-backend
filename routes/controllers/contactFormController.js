const createEmailTransporter = require('../utils/emailTransporter');
const dotenv = require('dotenv')
dotenv.config();

const transporter = createEmailTransporter();

const handleContactForm = (req, res) => {
    const { email, subject, message } = req.body;

    const mailOptions = {
        from: process.env.user,
        to: process.env.to,
        subject: subject,
        html: `
          <p>Email: ${email}</p>
          
          <blockquote>
            <p>${message}</p>
          </blockquote>
        `
    };

    // Envoi de l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
        } else {
            console.log('E-mail envoyé : ' + info.response);
            res.status(200).send('E-mail envoyé avec succès.');
        }
    });
};

module.exports = {
    handleContactForm,
};