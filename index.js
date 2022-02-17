const express = require('express');
const bodyParser = require('body-parser');

const patientController = require('./controllers/patientController');
const planController = require('./controllers/planController');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', patientController);
app.use('/plans', planController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Port: ${PORT}`);
});
