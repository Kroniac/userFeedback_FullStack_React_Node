const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = mongoose.model('surveys');
const surveyTemplates = require('../services/emailTemplates/surveyTemplate');
const Mailer = require('../services/Mailer');
module.exports = app => {
  app.post('/app/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email })),
      _user: req.user.id,
      lastSent: Date.now()
    });

    //To send an email
    const mailer = new Mailer(survey, surveyTemplates(survey));
  });
};
