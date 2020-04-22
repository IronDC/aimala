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
  delete req.body.usertype;
  //Create the User
  const existinUser = await UserModel.findOne({ username: req.body.username });
  if (!existinUser) {
    const newUser = await UserModel.create(req.body);
    //Login user directly
    req.logIn(newUser, (err) => {
      res.json(_.pick(req.user, ["username", "_id", "createdAt", "updateAt"]));
    });
    console.log(req.body.username, "User registered");
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
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Session seve went bad" });
      }
      return res.json(
        _.pick(req.user, ["username", "_id", "createdAt", "updateAt", "steamid"])
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
      password,
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

// ADD GAME TO USER
router.put("/:id/addgame", isLoggedIn(), async (req, res, next) => {
  try {
    console.log(req.user);
    const gameid = req.params.id;
    const userid = req.user.id;
    console.log(`Adding game ${gameid} to user ${userid}`);
    const user = await UserModel.findOneAndUpdate(
      { _id: userid },
      { $addToSet: { gamesOwned: gameid } },
      {
        new: true,
      }
    ).populate("gamesOwned");
    return res.json({ status: "Added Game to user", user });
  } catch (error) {
    return res.status(401).json({ status: "Game Not Found" });
  }
});

// ADD PLATFORM TO USER
router.put("/:id/addplatform", isLoggedIn(), async (req, res, next) => {
  try {
    const platformid = req.params.id;
    const userid = req.user.id;
    console.log(`Adding platform ${platformid} to user ${userid}`);
    const user = await UserModel.findOneAndUpdate(
      { _id: userid },
      { $addToSet: { platformsOwned: platformid } },
      {
        new: true,
      }
    ).populate("platformsOwned");
    return res.json({ status: "Added Platform to user", user });
  } catch (error) {
    return res.status(401).json({ status: "Platform Not Found" });
  }
});

// ADD STEAM ID TO USER
router.put("/:steamid/addsteam", isLoggedIn(), async (req, res, next) => {
  try {
    console.log(req.user);
    const steamid = req.params.steamid;
    const userid = req.user.id;
    console.log(`Adding Steam ID ${steamid} to user ${userid}`);
    const user = await UserModel.findOneAndUpdate(
      { _id: userid },
      { steamid: steamid },
      {
        new: true,
      }
    );
    return res.json({ status: "Added SteamID to user", user });
  } catch (error) {
    return res.status(401).json({ status: "Error Adding SteamID" });
  }
});

// GET THE CURRENT USER
router.get("/", isLoggedIn(), async (req, res, next) => {
  try {
    const userid = req.user.id;
    const user = await UserModel.findById(userid)
      .populate("platformsOwned")
      .populate("gamesOwned");
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ status: "User Not Found" });
  }
});

module.exports = router;
