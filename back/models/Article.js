const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema(
  {
    gameRelated: [{ type: Schema.Types.ObjectId, ref: "Game" }],
    platformRelated: [{ type: Schema.Types.ObjectId, ref: "Platform" }],
    title: String,
    text: String,
    image: String
  },

  {
    timestamps: true
  }
);
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
