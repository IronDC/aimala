const mongoose = require('mongoose');
​
const platformSchema = new mongoose.Schema(
  {
    name: String,
    year: Number,
    description:String,
    logo: {
      type: String,
      default: 'https://assets-edge.slickpic.com/img/common/profileimg_default250x250-camera.png'
    },
    image: {
      type: String,
      default: 'https://assets-edge.slickpic.com/img/common/profileimg_default250x250-camera.png'
    },
    gamepad: String,
  },

  {
    timestamps: true,
  },
);
​
​
const Platform = mongoose.model('Platform', platformSchema);
module.exports = Platform;