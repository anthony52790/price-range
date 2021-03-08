const express = require("express");
const app = express();
var path = require('path');

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});