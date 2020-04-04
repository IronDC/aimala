const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gametypeSchema = new Schema(
  {
    gametype: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const GameType = mongoose.model('GameType', gametypeSchema);
module.exports = GameType;
