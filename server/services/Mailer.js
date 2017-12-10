const sendGrid = require('sendgrid');
const helper = sendGrid.helper;
const keys = require('../config/keys');

//sendGrid Mailer setup
class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    //to set the email
    //from_email : who send the email
    //subject : subject of the email
    //body: body of the email
    //recipients: who to send the email
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    //helper function from extended class mail to add mail's body
    this.addContent(this.body);

    //to track user click on each mail for sendGrid to set it's own special link to the mails
    this.addClickTracking();

    this.addRecipients();
  }

  //to return email of the recipients from the recipients sub-document
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickSetting = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickSetting);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    const response = this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
