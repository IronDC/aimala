const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gameSchema = new Schema(
  {
    title: {
    type: String,
    required: "title is required",
  },
    gameType: {
      type: [{ type: Schema.Types.ObjectId, ref: "gameType" }],
      default: []
    },
    cover: {
      type: String,
      default:
        "https://assets-edge.slickpic.com/img/common/profileimg_default250x250-camera.png"
    },
    description: String,
    publisher: String,
    year: Number,
    trailer: String,
    platforms: {
      type: [{ type: Schema.Types.ObjectId, ref: "Platforms" }],
      default: []
    },
    status: {
      type: String,
      enum: ["pending", "published"],
      default: "pending"
    },
    userCreator: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: []
    }
  },

  {
    timestamps: true
  }
);
const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
