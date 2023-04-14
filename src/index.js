require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/:date?", (req, res) => {
  let { date } = req.params;
  const response = { unix: "", utc: "" };
  
  if (!date) {
    response.utc  = new Date().toUTCString();
    response.unix = new Date();
    return res.json(response);
  }
  
  date = Number.parseInt(date);
  
  if (!date) return res.json({ error: 'Invalid Date' });

  response.unix = date;
  response.utc = new Date(date).toUTCString();

  res.json(response);
});

app.listen(PORT, console.log(`server is running on http://localhost:${PORT}`));
