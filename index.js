const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// app.use(express.json());
// app.use(express.text());
app.use(express.static('public'));

app.use('/', require(path.join(__dirname, 'routes/app_get')));

app.use('/', require(path.join(__dirname, 'routes/app_post')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});