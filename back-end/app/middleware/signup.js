const db = require("../models");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if(user)
      {
        res.send({ message: "User was registered successfully!" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

module.exports=signup;