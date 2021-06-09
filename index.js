var express = require('express')
var app = express()

app.use(express.static('public'))

//heroku injects the port number into the PORT env value
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Running`);
});