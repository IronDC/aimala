const express = require("express");
// const PlatformModel = require("../models/Platform");
// const GameModel = require("../models/Game");
const ArticleModel = require("../models/Article");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

// FALTA UN MIDDLEWARE PARA DIFERENCIAR ENTRE ADMIN Y USER

// GET TODOS LOS ARTICULOS
router.get("/", async (req, res, next) => {
  try {
    const article = await ArticleModel.find();
    return res.json(article);
  } catch (error) {
    return res.status(500).json({ status: "article Not Found" });
  }
});

// GET UN ARTICULO
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const article = await ArticleModel.findById(id);
    return res.json(article);
  } catch (error) {
    return res.status(500).json({ status: "article Not Found" });
  }
});

//CREATE ARTICLE
router.post("/create", async (req, res, next) => {
  const newArticle = await ArticleModel.create(req.body);
  return res.json({ status: 200, message: "Article Saved" });
});

// EDITAR ARTÍCULO

router.put("/:id/edit", async (req, res, next) => {
  try {
    const id = req.params.id;
    await ArticleModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({ status: "Article Edited" });
  } catch (error) {
    return res.status(401).json({ status: "Article Not Found" });
  }
});

// // GUARDAR PLATAFORMA EN USER.PLATFORMSOWNED

// router.put("/:id/addplatformowned", isLoggedIn(), async (req, res, next) => {
//   try {
//     console.log(req.user);
//     const platformid = req.params.id;
//     const userid = req.user.id;
//     console.log(`Adding platform ${platformid} to user ${userid}`);
//     const user = await UserModel.findById(userid);
//     console.log(user);
//     user.platformsOwned.push(platformid);
//     user.save();
//     return res.json({ status: "Added Platform to user" });
//   } catch (error) {
//     return res.status(401).json({ status: "Platform Not Found" });
//   }
// });

// BORRAR ARTÍCULO DE LA BBDD GENERAL

router.delete("/:id", isLoggedIn(), async (req, res, next) => {
  try {
    const articleid = req.params.id;
    await ArticleModel.findByIdAndDelete(articleid);
    return res.json({ status: "Article Deleted" });
  } catch (error) {
    return res.status(401).json({ status: "Article Not Found" });
  }
});

module.exports = router;
