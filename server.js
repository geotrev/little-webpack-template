// Express server for ndoe environments.
// Can be used on heroku, netlify, and the like.

const express = require("express")
const path = require("path")
const expressStaticGzip = require("express-static-gzip")

const app = express()
const PORT = process.env.PORT || 3000

// Serve gzip compressed files when available.
app.use("/", expressStaticGzip("build"))
//
// Comment the above line if you don't need compression;
// Then uncomment the line below:
//
// app.use(express.static(path.join(__dirname, 'build')));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"))
})

app.listen(PORT, error => {
  error
    ? console.log(error)
    : console.info(
        `--> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`,
      )
})
