const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.password
    }
});

app.post('/contactform', (req, res) => {
    const { email, subject, message } = req.body;

    console.log(req.body)

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
});

app.listen(PORT, () => {
    console.log(`Serveur backend en cours d\'exécution sur le port ${PORT}`);
});
