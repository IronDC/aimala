const express = require("express");
const GameTypeModel = require("../models/GameType");
const UserModel = require("../models/User");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

router.get('/',async (req, res, next) => {
  try{
    const gametype = await GameTypeModel.find()
    return res.json(gametype);
  } catch (error) {
    return res.status(500).json({ status: "GameType Not Found" });
  }    
});

//CREATE Game the Aimala DB
router.post("/create", async (req, res, next) => {
  console.log("Adding gametype to the Aimala DB");
  const newGameType = await GameTypeModel.create(req.body);
  console.log(`${req.body.gametype} creado`);
  return res.json({ status: 200, message: "New GameType Created" });
});
// HAY QUE ASEGURARSE DE QUE EN LA URL LE METEMOS LA ID

router.put("/:id/edit", isLoggedIn(), async (req, res, next) => {
  try {
    //console.log(req);
    const id = req.params.id;
    await GameTypeModel.findByIdAndUpdate(id,req.body, { new: true});
    return res.json({ status: "Edited GameTypeModel" });
  } catch (error) {
    return res.status(401).json({ status: "GameType Not Found" });
  }
});

// BORRAR JUEGO DE LA BBDD GENERAL

router.delete("/:id", isLoggedIn(), async (req, res, next) => {
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
