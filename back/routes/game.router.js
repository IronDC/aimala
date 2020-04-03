const express = require("express");
const GameModel = require("../models/Game");
// const passport = require("passport");
// const _ = require("lodash");
const router = express.Router();
// const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//Add Game the Aimala DB
router.post("/addgame", async (req, res, next) => {
  console.log("Adding game to the Aimala DB");
  // console.log(`Usuario conectado: ${req.user}`);
  const {
    title,
    gameType,
    cover,
    description,
    publisher,
    year,
    trailer,
    platforms,
    status,
    userCreator
  } = req.body;

  console.log(title, gameType, year);

  const newGame = await GameModel.create({
    title,
    gameType,
    cover,
    description,
    publisher,
    year,
    trailer,
    platforms,
    status,
    userCreator
  });

  console.log(`${title} creado`);
  return res.json({ status: 200, message: "New Game Created" });
});

// EDITAR JUEGO (CARBALLO Y DAVID DEL FUTURO, HACED ESTO SOLO PARA ADMINS)

router.post("/editgame", isLoggedIn(), async (req, res, next) => {
  try {
    console.log(req);
    const titleGame = req.body.title;
    const {
      title,
      gameType,
      cover,
      description,
      publisher,
      year,
      trailer,
      platforms,
      status,
      userCreator
    } = req.body;
    console.log(`Editing Game`);
    await GameModel.findOneAndUpdate(titleGame, {
      title,
      gameType,
      cover,
      description,
      publisher,
      year,
      trailer,
      platforms,
      status,
      userCreator
    });
    return res.json({ status: "Edited Game" });
  } catch (error) {
    return res.status(401).json({ status: "Game Not Found" });
  }
});

// GUARDAR JUEGO EN USER.GAMESOWNED

// BORRAR JUEGO DE LA BBDD GENERAL

// //Login
// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, fealureDetails) => {
//     if (err) {
//       console.log(err);
//       return res.json({ status: 500, message: "Autentication Error" });
//     }
//     if (!user) {
//       return res.json({ status: 401, message: fealureDetails.message });
//     }
//     req.logIn(user, err => {
//       if (err) {
//         return res.status(500).json({ message: "Session seve went bad" });
//       }
//       return res.json(
//         _.pick(req.user, ["username", "_id", "createdAt", "updateAt"])
//       );
//     });
//   })(req, res, next);
// });

// // LOGOUT
// router.get("/logout", isLoggedIn(), (req, res, next) => {
//   if (req.user) {
//     req.logout();
//     return res.json({ status: "Log out" });
//   } else {
//     return res
//       .status(401)
//       .json({ status: "You have to be logged in to logout" });
//   }
// });

// // WHOAMI
// router.get("/whoami", (req, res, next) => {
//   if (req.user) return res.json(req.user);
//   else return res.status(401).json({ status: "No user session present" });
// });

module.exports = router;
