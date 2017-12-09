const sendGrid = require('sendgrid');
const helper = sendGrid.helper;
const keys = require('../config/keys');

class Mailer extends helper.Mail {}

module.exports = Mailer;
