// Create web server  that listens on port 3000 and serves a simple HTML page that
// contains a form with a textarea and a submit button. When the form is submitted, the server should receive the form data and log it to the console.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Thanks for submitting your comment!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});