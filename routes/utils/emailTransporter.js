const nodemailer = require('nodemailer');

const createEmailTransporter = () => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.user,
            pass: process.env.password
        }
    });

    return transporter;
};

module.exports = createEmailTransporter;
