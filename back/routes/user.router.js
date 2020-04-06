const express = require("express");
const UserModel = require("../models/User");
const GameModel = require("../models/Game.js");
const passport = require("passport");
const _ = require("lodash");
const router = express.Router();
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//SignUp
router.post("/signup", async (req, res, next) => {
  console.log("Signup User Called");
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
      password,
      gamesOwned,
      platformsOwned
    });
    //Login user directly
    req.logIn(newUser, err => {
      res.json(_.pick(req.user, ["username", "_id", "createdAt", "updateAt"]));
    });
    console.log(username, "User registered");
  } else {
    res.json({ status: "User Exist" });
  }
});
//Login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, fealureDetails) => {
    if (err) {
      console.log(err);
      return res.json({ status: 500, message: "Autentication Error" });
    }
    if (!user) {
      return res.json({ status: 401, message: fealureDetails.message });
    }
    req.logIn(user, err => {
      if (err) {
        return res.status(500).json({ message: "Session seve went bad" });
      }
      return res.json(
        _.pick(req.user, ["username", "_id", "createdAt", "updateAt"])
      );
    });
  })(req, res, next);
});

// LOGOUT
router.get("/logout", isLoggedIn(), (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

// EDIT USER
router.post("/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const { username, email, password } = req.body;
    console.log(`Editing user con id: ${req.user}`);
    await UserModel.findByIdAndUpdate(id, {
      username,
      email,
      password
    });
    return res.json({ status: "Edited Profile" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

// WHOAMI
router.get("/whoami", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

router.put("/:id/addgame", isLoggedIn(), async (req, res, next) => {
  try {
    console.log(req.user);
    const gameid = req.params.id;
    const userid = req.user.id;
    console.log(`Adding game ${gameid} to user ${userid}`);
    const user = await UserModel.findById(userid);
    console.log(user);
    user.gamesOwned.push(gameid);
    user.save();
    return res.json({ status: "Added Game to user" });
  } catch (error) {
    return res.status(401).json({ status: "Game Not Found" });
  }
});

router.put("/:id/addplatform", isLoggedIn(), async (req, res, next) => {
  try {
    console.log(req.user);
    const platformid = req.params.id;
    const userid = req.user.id;
    console.log(`Adding platform ${platformid} to user ${userid}`);
    const user = await UserModel.findById(userid);
    console.log(user);
    user.platformsOwned.push(platformid);
    user.save();
    return res.json({ status: "Added Platform to user" });
  } catch (error) {
    return res.status(401).json({ status: "Platform Not Found" });
  }
});

router.get('/',isLoggedIn(),async (req, res, next) => {
  try{
    const userid = req.user.id;
    const user = await UserModel.findById(userid).populate('platformsOwned').populate('gamesOwned');
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ status: "User Not Found" });
  }    
});



module.exports = router;
