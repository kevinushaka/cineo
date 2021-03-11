const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res) => {


    let token = req.header("x-access-token");
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!"
        });
      }
      
      req.userId = decoded.id;
      //next();
      return res.status(200).send({
        message: "Authorized"
      })
    });
};

module.exports = verifyToken;