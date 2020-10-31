// source: https://www.robinwieruch.de/node-express-server-rest-api
'use strict';
const generator = require('./generator.js');
const express = require('express');
const chalk = require('chalk');
const cors = require('cors');

const app = express().use(cors(), express.static('./public'));
const port = process.env.PORT || 3000;

var generatedKey = {
  key: '',
  source: 'https://github.com/nilaerdna/windows95keygen',
  author: 'https://github.com/nilaerdna',
};

app.get('/oem', (request, response) => {
  console.log(chalk.yellow('an OEM key was requested'));
  generatedKey.key = generator.generateOemKey();
  return response.send(JSON.stringify(generatedKey));
});

app.get('/normal', (request, response) => {
  console.log(chalk.blue('a NORMAL key was requested'));
  generatedKey.key = generator.generateNormalKey();
  return response.send(JSON.stringify(generatedKey));
});

app.listen(port, () => {
  console.log(chalk.green(`Listening on port ${port}!`));
});
