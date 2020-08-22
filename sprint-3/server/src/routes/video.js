const app = require('express').Router();
const videosData = require('../data/videos.json');
const videoDetails = require('../data/video-details.json');

app.get('/', function (req, res, next) {
  res.send(videosData);
});


app.get('/:id', function (req, res, next) {
  let videoId = req.params.id;
  const detail = videoDetails.find(d => d.id === videoId);
  if (detail) {
    res.send(detail);
  } else {
    res.sendStatus(404);
  }
  // get album data from server and res.send() a response here
});

app.post('/', function(req, res, next) {
  console.log(req.body);
});

module.exports = app;