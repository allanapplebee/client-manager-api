const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  company: String,
  phone: String,
  frontEnd: String,
  backEnd: String,
  contractType: String,
  // notes: Array
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
