const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes = require('./routes/clients');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api/clients', clientRoutes);

app.listen(port, () => {
  console.log('server has started on ' + port);
});
