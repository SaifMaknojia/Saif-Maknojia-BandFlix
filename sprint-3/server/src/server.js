const express = require('express');
const app = express();
const cors = require('cors');
const videoRoute = require('./routes/video');
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/videos', videoRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})