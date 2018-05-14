const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
