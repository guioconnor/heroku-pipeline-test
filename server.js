const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    status: 'ok'
  })
});

const PORT = process.env.PORT || 3030
app.listen(PORT)
console.log(`Listening at port ${PORT}`)