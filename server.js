const express = require("express");

const app = express();

const PORT = process.env.PORT || 6666;

app.get("/", (req, res) => res.send("API Runninng..."));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
