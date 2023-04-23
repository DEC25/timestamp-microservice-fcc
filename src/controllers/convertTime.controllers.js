const getCurrentTime = (_req, res) => {
  const newDate = new Date();
  res.json({
    unix: newDate.getTime(),
    utc: newDate.toUTCString(),
  });
};

const unixAndUTCTime = (req, res) => {
  const { date } = req.params;

  // Response
  const newDate = new Date(date);
  res.json({
    unix: newDate.getTime(),
    utc: newDate.toUTCString(),
  });
};

module.exports = { getCurrentTime, unixAndUTCTime };
