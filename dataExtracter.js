const csv = require('csvtojson');

const converter = (fileName) => csv().fromFile(fileName);

module.exports = converter;
