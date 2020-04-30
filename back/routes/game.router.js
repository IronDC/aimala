const express = require("express");
const GameModel = require("../models/Game");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");
const uploadCloudinaryImage = require("../lib/uploadMiddleware");

router.get("/", async (req, res, next) => {
  try {
    const games = await GameModel.find();
    return res.json(games);
  } catch (error) {
    return res.status(500).json({ status: "Game Not Found" });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const game = await GameModel.findById(id);
    return res.json(game);
  } catch (error) {
    return res.status(500).json({ status: "Game Not Found" });
  }
});

router.post(
  "/create",
  uploadCloudinaryImage.single("cover"),
  async (req, res, next) => {
    try {
      console.log("CREAMOS EL JUEGO EN GAME.ROUTER <<<<<<<<<<<<<");
      console.log("REQ.BODY <<<<<<<<<<<<<");
      console.log(req.body);
      console.log("REQ.FILE <<<<<<<<<<<<<");
      console.log(req.file);
      const { title, description, publisher, year, trailer } = req.body;
      const newGame = await GameModel.create({
        title,
        description,
        publisher,
        year,
        trailer,
        userCreator: req.user.id,
        cover: req.file,
      });

      console.log(`${req.body.title} creado`);
      return res.json({ status: "New Game Created", newGame });
    } catch (error) {
      return res.status(500).json({ status: "Error Adding Game" });
    }
  }
);

router.put("/:id/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(`Editing Game`);
    await GameModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({ status: "Edited Game" });
  } catch (error) {
    return res.status(401).json({ status: "Game Not Found" });
  }
});

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
