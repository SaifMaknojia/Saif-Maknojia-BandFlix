const uuid = require('uuid').v4;
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

app.post('/', function (req, res, next) {
  console.log(req.body);
  const channel = 'John Doe';
  const id = uuid();
  videosData.push({
    id: id,
    channel: channel,
    image: req.body.image,
    title: req.body.title
  });

  videoDetails.push({
    id: id,
    title: req.body.title,
    channel: channel,
    image: req.body.image,
    description: req.body.description,
    comments: [],
    duration: '0',
    timestamp: Date.now(),
    likes: '0',
    views: '0',
    video: ''
  });

  res.redirect('http://localhost:3000/');

});

module.exports = app;