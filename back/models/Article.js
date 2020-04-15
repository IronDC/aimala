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
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
