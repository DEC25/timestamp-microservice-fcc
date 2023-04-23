const { Router } = require('express');
const timeRouter = Router();
const { unixAndUTCTime } = require('../controllers/convertTime.controllers');

timeRouter.get('/', unixAndUTCTime);
timeRouter.get('/:date', unixAndUTCTime);

module.exports = { timeRouter };