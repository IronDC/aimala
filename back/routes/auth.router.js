const express = require("express");
const UserModel = require("../models/User");
const passport = require("passport");
const _ = require("lodash");
const router = express.Router();
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//SignUp
router.post("/signup", async (req, res, next) => {
  console.log("Signup User Called")
  const {
    usertype,
    username,
    email,
    password,
    gamesOwned,
    platformsOwned
  } = req.body;

  console.log(usertype, username, email, password, gamesOwned, platformsOwned);
  //Create the User
  const existinUser = await UserModel.findOne({ username });
  if (!existinUser) {
    const newUser = await UserModel.create({
      usertype,
      username,
      email,
      password: hashPassword(password),
      gamesOwned,
      platformsOwned
    });
    //Login user directly
    req.logIn(newUser, err => {
      res.json(
        _.pick(req.user, [
          "username",
          "_id",
          "createdAt",
          "updateAt"
        ])
      );
    });
    console.log(username,"User registered");
  } else {
    res.json({status:"User Exist"});
  }
});
//Login
router.post("/login", (req,res,next) => {
  passport.authenticate("local", (err,user,fealureDetails) => {
    if (err) {
      console.log(err);
      return res.json({status:500, message:"Autentication Error"});
    }
    if (!user) {
      return res.json({status:401, message:fealureDetails.message});
    }
    req.logIn(user, err => {
      if(err) {
        return res.status(500).json({message:"Session seve went bad"});
      }
      return res.json(_.pick(req.user,["username","_id","createdAt","updateAt"]));
    })
  })(req,res,next);
});

// LOGOUT
router.get("/logout",isLoggedIn(), (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

// WHOAMI
router.get("/whoami", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;



