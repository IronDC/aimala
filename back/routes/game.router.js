const express = require("express");
const GameModel = require("../models/Game");
const UserModel = require("../models/User");
// const passport = require("passport");
// const _ = require("lodash");
const router = express.Router();
// const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//CREATE Game the Aimala DB
router.post("/create", async (req, res, next) => {
  console.log("Adding game to the Aimala DB");
  const newGame = await GameModel.create(req.body);

  console.log(`${req.body.title} creado`);
  return res.json({ status: 200, message: "New Game Created" });
});

// EDITAR JUEGO (CARBALLO Y DAVID DEL FUTURO, HACED ESTO SOLO PARA ADMINS)
// HAY QUE ASEGURARSE DE QUE EN LA URL LE METEMOS LA ID

router.put("/:id/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(`Editing Game`);
    await GameModel.findByIdAndUpdate(id, req.body, { new: true});
    return res.json({ status: "Edited Game" });
  } catch (error) {
    return res.status(401).json({ status: "Game Not Found" });
  }
});

// GUARDAR JUEGO EN USER.GAMESOWNED

router.put("/:id/add", isLoggedIn(), async (req, res, next) => {
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

// BORRAR JUEGO DE LA BBDD GENERAL

router.delete("/:id", isLoggedIn(), async (req, res, next) => {
  try {
    const gameid = req.params.id;
    console.log(`Id game for delete ${gameid}`);
    await GameModel.findByIdAndDelete(gameid);
    return res.json({ status: "Game Deleted" });
  } catch (error) {
    return res.status(401).json({ status: "Game Not Found" });
  }
});

module.exports = router;
