/* INCLUDES */
const fs = require('fs');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  const content = fs.readFileSync("./datasets/indexed.json");
  res.send('Hello World');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
