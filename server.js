const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    status: 'ok',
    version: 2,
    someEnvVar: process.env.SOME_ENV_VAR
  })
});

app.get('/dashboard', (req, res) => {
  res.send({
    status: 'ok',
    view: 'dashboard'
  })
});

const PORT = process.env.PORT || 3030
app.listen(PORT)
console.log(`Listening at port ${PORT}`)