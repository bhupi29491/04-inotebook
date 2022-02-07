const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'BhupendraIsaGoodLearner';

// Create a  user using: POST "/api/auth/createuser". No Login Required.
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    //If there are errors, return bad request & the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check whether the user with the same email exists already.
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exist." });
      }

      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
      });

      const data = {
        user :{
          id : user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({authToken});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error occured.")
    }
  }
);

module.exports = router;
