const express = require('express');
const request = require('request');
const { v4, stringify, v5 } = require('uuid');
const url = require('url');

const app = express();

var curUUID = {}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/v1/proxy/get/:url', (req, res) => {
	if (req.query.uuid == curUUID[req.query.key].uuid) {
		if (curUUID[req.params.key].uses <= 100) {
			request(
				{ url: 'https://' + req.parms.url },
				(error, response, body) => {
					if (error || response.statusCode !== 200) {
						return res.status(500).json({ type: 'error', message: err.message });
					}
					res.json(JSON.parse(body));
				}
			)
			curUUID[req.params.key].uses++
		}
		if (curCertificate[req.params.key].uses > 100) {
			delete curUUID[req.params.key]
		}
	}
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`))