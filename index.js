const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.text());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/about', (req, res) => {
  console.log(req.body);
  // console.log(req.headers);
  res.json({title:"hello", data:req.body});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});