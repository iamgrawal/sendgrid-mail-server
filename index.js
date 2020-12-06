require('dotenv').config()

const sendEmail = require('./mailer');
const getData = require('./dataExtracter');
const { COUNTDOWN_4_DAYS } = require('./config');

const template = COUNTDOWN_4_DAYS;

// extract data from CSV/Excel file
getData('./addresses.csv').then(registrations => {
  registrations.forEach(registration => {
    sendEmail({template, ...registration});
  });
});
