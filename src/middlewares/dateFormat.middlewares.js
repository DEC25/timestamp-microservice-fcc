const verifyDateFormat = (req, res, next) => {
  let { date } = req.params;
  const ERROR_MESSAGE = { error: 'Invalid Date' };

  if (date.match(/^\d{4}-\d{2}-\d{2}$/)) return next();
  if (date.match(/^\d+$/)) {
    req.params.date = Number(date);
    return next();
  }
  
  res.json(ERROR_MESSAGE);
}

module.exports = { verifyDateFormat };
