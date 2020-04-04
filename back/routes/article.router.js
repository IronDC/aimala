const express = require("express");
// const PlatformModel = require("../models/Platform");
// const GameModel = require("../models/Game");
const ArticleModel = require("../models/Article");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

// FALTA UN MIDDLEWARE PARA DIFERENCIAR ENTRE ADMIN Y USER

//CREATE ARTICLE
router.post("/newarticle", async (req, res, next) => {
  console.log("Creating Article");
  const { gameRelated, platformRelated, title, text, image } = req.body;

  console.log(`REQUERIDO ${title}`);

  const newArticle = await ArticleModel.create({
    gameRelated,
    platformRelated,
    title,
    text,
    image
  });

  console.log(`CREADO ${title}`);
  return res.json({ status: 200, message: "Article Saved" });
});

// EDITAR ARTÍCULO

router.put("/:id/editarticle", async (req, res, next) => {
  try {
    const id = req.params.id;
    const { gameRelated, platformRelated, title, text, image } = req.body;
    console.log(`Editing Article ${title}`);
    await ArticleModel.findByIdAndUpdate(id, {
      gameRelated,
      platformRelated,
      title,
      text,
      image
    });
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

router.put("/:id/deletearticle", isLoggedIn(), async (req, res, next) => {
  try {
    const articleid = req.params.id;
    console.log(`Article's id to delete ${articleid}`);
    await ArticleModel.findByIdAndDelete(articleid);
    return res.json({ status: "Article Deleted" });
  } catch (error) {
    return res.status(401).json({ status: "Article Not Found" });
  }
});

module.exports = router;