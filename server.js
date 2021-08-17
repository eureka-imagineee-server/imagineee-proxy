const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors')

const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send("welcome to imagineee proxy")
})

app.get('/v1/proxy/get', (req, res) => {
  console.log("request...")
  if (req.query.type == "text") {
    fetch(req.query.url, {method: "GET"})
    .then(res => res.text())
    .then(body => res.json({text: body}));
  } else if (req.query.type == "json") {
    fetch(req.query.url, {method: "GET"})
    .then(res => res.json())
    .then(json => res.json({json: json}));
  } else if (req.query.type == "blob") {
    fetch(req.query.url, {method: "GET"})
    .then(res => res.blob())
    .then(blob => res.json({blob: blob}));
  } else if (req.query.type == "arrayBuffer") {
    fetch(req.query.url, {method: "GET"})
    .then(res => res.arrayBuffer())
    .then(arrayBuffer => res.json({arrayBuffer: arrayBuffer}));
  } else {
    fetch(req.query.url, {method: "GET"})
    .then(res => res.text())
    .then(body => res.json({text: body}));
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`))
