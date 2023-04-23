const unixAndUTCTime = (req, res) => {
  let { date } = req.params;

  // Success and error response
  const RESPONSE = { unix: '', utc: '' };
  const ERROR_MESSAGE = { error: 'Invalid Date' };

  // Validating if there is a date
  if (!date) {
    let newDate = new Date();
    RESPONSE.utc  = newDate.toUTCString();
    RESPONSE.unix = newDate.getTime();
    return res.json(RESPONSE);
  }
  
  // Validating unix or ISO 8601 (yyyy-mm-dd) date format
  date = !date.match(/^\d{4}-\d{2}-\d{2}$/) ? Number(date) : date;
  if (!date) return res.json(ERROR_MESSAGE);

  // Validating date
  let newDate = new Date(date);
  if (!newDate.getTime()) return res.json(ERROR_MESSAGE);

  // Response
  RESPONSE.unix = newDate.getTime();
  RESPONSE.utc = newDate.toUTCString();
  res.json(RESPONSE);
};

module.exports = { unixAndUTCTime };
