const express = require("express");
const passport = require("passport");
const Person = require("../models/person.models");

const router = express.Router();

// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", { session: false }, (err, user, info) => {
//     if (err) return next(err);
//     if (!user) {
//       return res.status(401).json({ message: info.message });
//     }


//     return res.json({ message: "Login successful!", user });
//   })(req, res, next);
// });


// router.post("/signup", async (req, res) => {
//   try {
//     const data = req.body;
//     const newPerson = new Person(data);
//     const response = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

module.exports = router;



