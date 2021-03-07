
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log(req.body, req.);
  res.json(req.body);
});

app.listen(3005, () => console.log('server started'));
