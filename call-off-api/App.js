const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const db = mongoose.connect('mongodb://127.0.0.1:27017/calloff');

const port = process.env.PORT || 3000;
const CallOff = require('./models/callOffModel');
const callOffRouter = require('./routes/callOffRouter')(CallOff);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', callOffRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});


module.exports = app;