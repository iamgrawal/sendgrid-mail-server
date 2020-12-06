const chalk = require('chalk');
const config = require('./config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { templates, senderEmail } = config;

function sendEmail({ email, template, ...data }) {
  const msg = {
    to: email,
    from: senderEmail,
    templateId: templates[template],
    dynamic_template_data: data
  };

  // send the mail
  sgMail
    .send(msg)
      .then(() => console.log(chalk.green('.')))
      .catch((error) => console.error(chalk.red('-', error)));
}

module.exports = sendEmail;