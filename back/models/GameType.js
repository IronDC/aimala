const mongoose = require('mongoose');
​
const gametypeSchema = new mongoose.Schema(
  {
    gameType: String,
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