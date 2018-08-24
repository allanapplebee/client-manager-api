const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/client-api');

mongoose.Promise = Promise;

module.exports.Client = require('./clients');
