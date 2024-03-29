const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.SECRET_KEY;

router.post(
  "/createuser",
  //  --->  Validation is done at frontend using express validator library
  [
    // username must be an email
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("name").isLength({ min: 5 }),
    //   2nd param as output response in case of error
    body("password", "Incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // bcrypt for securing passsword .
    const salt = await bcrypt.genSalt(10);
    let securedPass = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: securedPass,
        email: req.body.email,
        location: req.body.location,
      }).then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    // username must be an email
    body("email").isEmail(),
    // password must be at least 5 chars long
    //   2nd param as output response in case of error
    body("password", "Incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "Enter correct username" });
      }

      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!pwdCompare) {
        return res.status(400).json({ errors: "Enter correct password" });
      }

      const data = {
        user: {
          id: userData.id,
        },
      };
      // header (same), payload,secret
      const AuthToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authToken: AuthToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
