const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var result = Number(req.body.x) + Number(req.body.y);
  res.send("The result of the calculation is " + result);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
