const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Node.js App! i am naresh. jenkins change in the code  ');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
