require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { timeRouter } = require('./routes/convertTime.routes');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Config
app.use(cors({ origin: ['https://www.freecodecamp.org'], optionsSuccessStatus: 200 }));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/views/');
});
app.use('/api', timeRouter);

// Not found
app.use((_req, res) => {
  res.json({
    errorCode: 404,
    message: 'Page not found'
  }).end();
})

// Starting server
app.listen(PORT, console.log(`server is running on http://${HOST}:${PORT}`));
