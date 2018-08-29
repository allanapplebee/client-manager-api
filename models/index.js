const mongoose = require('mongoose');
const dbURL = require('../config/secrets');

//api https://client-manager-api.herokuapp.com/

mongoose.set('debug', true);
mongoose.connect(dbURL.mongoURL);

mongoose.Promise = Promise;

module.exports.Client = require('./clients');
