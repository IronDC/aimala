const express = require("express");
const GameTypeModel = require("../models/GameType");
const UserModel = require("../models/User");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//CREATE Game the Aimala DB
router.post("/create", async (req, res, next) => {
  console.log("Adding gametype to the Aimala DB");
  // console.log(`Usuario conectado: ${req.user}`);
  const { gametype, description } = req.body;

  console.log(gametype, description);

  const newGameType = await GameTypeModel.create({
    gametype,
    description
  });

  console.log(`${gametype} creado`);
  return res.json({ status: 200, message: "New GameType Created" });
});
// HAY QUE ASEGURARSE DE QUE EN LA URL LE METEMOS LA ID

router.put("/:id/editgametype", isLoggedIn(), async (req, res, next) => {
  try {
    //console.log(req);
    const id = req.params.id;
    const {
      gametype,
      description
    } = req.body;
    console.log(`Editing Game`);
    await GameTypeModel.findByIdAndUpdate(id, {
      gametype,
      description
    });
    return res.json({ status: "Edited GameTypeModel" });
  } catch (error) {
    return res.status(401).json({ status: "GameType Not Found" });
  }
});

// GUARDAR TIPO DE JUEGO  EN GAME.GAMETYPES

// router.put("/:id/addgameowned", isLoggedIn(), async (req, res, next) => {
//   try {
//     console.log(req.user);
//     const gameid = req.params.id;
//     const userid = req.user.id;
//     console.log(`Adding game ${gameid} to user ${userid}`);
//     const user = await UserModel.findById(userid);
//     console.log(user);
//     user.gamesOwned.push(gameid);
//     user.save();
//     return res.json({ status: "Added Game to user" });
//   } catch (error) {
//     return res.status(401).json({ status: "Game Not Found" });
//   }
// });

// BORRAR JUEGO DE LA BBDD GENERAL

router.put("/:id/deletegametype", isLoggedIn(), async (req, res, next) => {
  try {
    const gametypeid = req.params.id;
    console.log(`Id game for delete ${gametypeid}`);
    await GameTypeModel.findByIdAndDelete(gametypeid);
    return res.json({ status: "GameType Deleted" });
  } catch (error) {
    return res.status(401).json({ status: "GameType Not Found" });
  }
});

module.exports = router;
