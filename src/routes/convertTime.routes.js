const { Router } = require('express');
const timeRouter = Router();
const { unixAndUTCTime, getCurrentTime } = require('../controllers/convertTime.controllers');
const { verifyDateFormat } = require('../middlewares/dateFormat.middlewares');

timeRouter.get('/', getCurrentTime);
timeRouter.get('/:date', verifyDateFormat, unixAndUTCTime);

module.exports = { timeRouter };