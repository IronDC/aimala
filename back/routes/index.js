const express = require("express");
const router = express.Router();

const game = require("./game.router.js");
router.use("/game", game);

const article = require("./article.router.js");
router.use("/article", article);

const platform = require("./platform.router.js");
router.use("/platform", platform);

const user = require("./user.router.js");
router.use("/user", user);

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
