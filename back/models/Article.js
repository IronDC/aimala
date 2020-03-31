const mongoose = require('mongoose');
​
const articleSchema = new mongoose.Schema(
  {
    gameRelated:[{ type : Schema.ObjectId, ref: 'Game' }],
    platformRelated:[{type: Schema.ObjectId, ref: 'Platform'}],
    title:String,
    text:String,
    image:String,
  },

  {
    timestamps: true,
  },
);
​
​
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;