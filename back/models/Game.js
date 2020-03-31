const mongoose = require('mongoose');
​
const gameSchema = new mongoose.Schema(
  {
    title: String,
    gameType: [{ type : Schema.ObjectId, ref: 'gameType' }],
    cover: {
      type: String,
      default: 'https://assets-edge.slickpic.com/img/common/profileimg_default250x250-camera.png'
    },
    description:String,
    publisher:String,
    trailer:String,
    platforms:[{ type : Schema.ObjectId, ref: 'Platforms' }],
    status:{
      type: String, enum: ["pending", "published"]
    },
    userCreator:[{ type : Schema.ObjectId, ref: 'User' }],
  },

  {
    timestamps: true,
  },
);
​
​
const Game = mongoose.model('Game', gameSchema);
module.exports = Game;