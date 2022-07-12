const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
  res.send('Hello People Again');
});

app.listen(port, () => {
  console.log(`Using port ${port}`)
})
