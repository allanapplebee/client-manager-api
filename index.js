const express = require('express');
const bodyParser = require('body-parser');
// const webPage = require('../client-manager-react/public/index.html');
const clientRoutes = require('./routes/clients');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api/clients', clientRoutes);

app.listen(port, () => {
  console.log('server has started on ' + port);
});
