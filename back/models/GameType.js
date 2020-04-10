const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gametypeSchema = new Schema(
  {
    gametype: {
      type: String,
      required: "gametype is required",
    },
    description: String,
  },
  {
    timestamps: true,
  }
);
const GameType = mongoose.model('GameType', gametypeSchema);
module.exports = GameType;
