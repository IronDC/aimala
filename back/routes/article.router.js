const express = require("express");
const ArticleModel = require("../models/Article");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

router.get("/", async (req, res, next) => {
  try {
    const article = await ArticleModel.find();
    return res.json(article);
  } catch (error) {
    return res.status(500).json({ status: "article Not Found" });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const article = await ArticleModel.findById(id);
    return res.json(article);
  } catch (error) {
    return res.status(500).json({ status: "article Not Found" });
  }
});

router.post("/create", async (req, res, next) => {
  const newArticle = await ArticleModel.create(req.body);
  return res.json({ status: 200, message: "Article Saved" });
});

router.put("/:id/edit", async (req, res, next) => {
  try {
    const id = req.params.id;
    await ArticleModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({ status: "Article Edited" });
  } catch (error) {
    return res.status(401).json({ status: "Article Not Found" });
  }
});

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
