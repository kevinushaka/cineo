const verifyToken = require("./authJwt");
const signup = require("./signup");
const login = require("./login");
const allStreams=require("./streams")
module.exports = {
  verifyToken,
  signup,
  login,
  allStreams
};
