const express = require('express');
const router = express.Router();
const contactFormController = require('./controllers/contactFormController');
const defController = require('./controllers/defController');

router.post('/contactform', contactFormController.handleContactForm);
router.get('/defs', defController.handleGetDef)

module.exports = (app) => {
    app.use('/api', router);
};