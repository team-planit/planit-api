"use strict";

require("@babel/polyfill");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT || 8081;
app.use((0, _cors["default"])());
app.get("/", function (req, res) {
  res.send("Hello from Moi Node!!");
}); // Sets what Port the Server is listening on

app.listen(port, function () {
  console.log("Listening to http://localhost:".concat(port));
});