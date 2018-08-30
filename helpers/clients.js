const db = require('../models');

exports.getClients = (req, res) => {
  db.Client.find()
    .then(clients => {
      res.json(clients);
    })
    .catch(err => {
      res.send(err);
    })
};

exports.createClient = (req, res) => {
  db.Client.create({
    name: req.body.name,
    company: req.body.company,
    phone: req.body.phone,
    frontEnd: req.body.frontEnd,
    backEnd: req.body.backEnd,
    contractType: req.body.contractType
  })
    .then(newClient => {
      res.json(newClient);
    })
    .catch(err => {
      res.send(err);
    })
};

exports.getClient = (req, res) => {
  db.Client.findById(req.params.id)
    .then(foundClient => {
      res.json(foundClient);
    })
    .catch(err => {
      res.send(err);
    })
};

exports.updateClient = (req, res) => {
  db.Client.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedclient => {
      res.json(updatedclient);
    })
    .catch(err => {
      res.send(err);
    })
};

exports.deleteClient = (req, res) => {
  db.Client.delete({_id: res.params.id})
    .then(() => {
      res.json({message: 'Client deleted'});
    })
    .catch(err => {
      res.send(err);
    })
};

module.exports = exports;
