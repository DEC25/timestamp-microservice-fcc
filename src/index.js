require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { timeRouter } = require('./routes/convertTime.routes');

const PORT = process.env.PORT || 3000;

// Config
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

app.listen(PORT, console.log(`server is running on http://localhost:${PORT}`));
