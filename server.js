// Express server used for Heroku.

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const expressStaticGzip = require('express-static-gzip')

// Uncomment line 10, then comment out line 11 to stop gzip compression.

// app.use(express.static(path.join(__dirname, 'build')));
app.use("/", expressStaticGzip("build"));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(PORT, error => {
  error ? console.log(error) : console.info(`--> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
