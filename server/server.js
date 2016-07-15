const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/serverConfig.js');
const router = require('./routers/router.js');

const app = express();

app.use('/', express.static('client'));

app.use(bodyParser.json());
app.use(router);

app.listen(config.port, () => {
  console.log('Listening on port ', config.port);
});

module.exports = app;