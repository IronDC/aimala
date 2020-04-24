const express = require("express");
const GameTypeModel = require("../models/GameType");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

// GET ALL GAMETYPES
router.get("/", async (req, res, next) => {
  try {
    const gametype = await GameTypeModel.find();
    return res.json(gametype);
  } catch (error) {
    return res.status(500).json({ status: "GameType Not Found" });
  }
});

// GET ONE GAMETYPE
router.get("/:id", async (req, res, next) => {
  try {
    id = req.params.id;
    const gametype = await GameTypeModel.findById(id);
    return res.json(gametype);
  } catch (error) {
    return res.status(500).json({ status: "GameType Not Found" });
  }
});

//CREATE Game the Aimala DB
router.post("/create", async (req, res, next) => {
  try {
    const newGameType = await GameTypeModel.create(req.body);
    return res.json({ status: 200, message: "New GameType Created" });
  } catch (error) {
    return res.status(500).json({ status: "Error Creating Gametype" });
  }
});

router.put("/:id/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.params.id;
    await GameTypeModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({ status: "Edited GameTypeModel" });
  } catch (error) {
    return res.status(401).json({ status: "GameType Not Found" });
  }
});

router.delete("/:id", isLoggedIn(), async (req, res, next) => {
  try {
    const gametypeid = req.params.id;
    await GameTypeModel.findByIdAndDelete(gametypeid);
    return res.json({ status: "GameType Deleted" });
  } catch (error) {
    return res.status(401).json({ status: "GameType Not Found" });
  }
});

module.exports = router;
