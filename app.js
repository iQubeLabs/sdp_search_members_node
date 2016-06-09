'strict mode';

const process = require('process');
const express = require('express');
const loadRoutes = require('./routes/load');
const config = require('config');

const appPort = config.APP_PORT;
const expressApp = express();

loadRoutes(expressApp);

expressApp.listen(appPort);

console.log('App running and listening on port ' + appPort);
