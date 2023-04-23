const unixAndUTCTime = (req, res) => {
  let { date } = req.params;
  const RESPONSE = { unix: '', utc: '' };
  const ERROR_MESSAGE = { error: 'Invalid Date' };

  if (!date) {
    let newDate = new Date();
    RESPONSE.utc  = newDate.toUTCString();
    RESPONSE.unix = newDate.getTime();
    return res.json(RESPONSE);
  }
  
  date = !date.match(/^\d{4}-\d{2}-\d{2}$/) ? Number(date) : date;
  
  if (!date) return res.json(ERROR_MESSAGE);

  let newDate = new Date(date);

  if (!newDate.getTime()) return res.json(ERROR_MESSAGE);

  RESPONSE.unix = newDate.getTime();
  RESPONSE.utc = newDate.toUTCString();

  res.json(RESPONSE);
};

module.exports = { unixAndUTCTime };