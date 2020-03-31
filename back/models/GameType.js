const mongoose = require('mongoose');
​
const gametypeSchema = new mongoose.Schema(
  {
    gameType: {
      type:String, enum:['shooter','FPS','platform','racing']
    },
    description: String,
  },

  {
    timestamps: true,
  },
);
​
​
const GameType = mongoose.model('GameType', gametypeSchema);
module.exports = GameType;