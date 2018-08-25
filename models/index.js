const mongoose = require('mongoose');
const dbURL = require('../secrets');

mongoose.set('debug', true);
mongoose.connect(dbURL.mongoURL);

mongoose.Promise = Promise;

module.exports.Client = require('./clients');
