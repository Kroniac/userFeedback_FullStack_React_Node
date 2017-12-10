const sendGrid = require('sendgrid');
const helper = sendGrid.helper;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();
    //to set the email
    //from_email : who send the email
    //subject : subject of the email
    //body: body of the email
    //recipients: who to send the email
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);
  }

  //to return email of the recipients from the recipients sub-document
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }
}

module.exports = Mailer;
