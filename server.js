// Express server used for Heroku.

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const expressStaticGzip = require('express-static-gzip')

// Serve gzip compressed files when available.
app.use("/", expressStaticGzip("build"));
//
// Comment the above line if you don't need compression;
// Then uncomment the line below:
//
// app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(PORT, error => {
  error ? console.log(error) : console.info(`--> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
