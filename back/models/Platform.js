const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const platformSchema = new Schema(
  {
    name: String,
    year: Number,
    description: String,
    logo: {
      type: String,
      default:
        "https://assets-edge.slickpic.com/img/common/profileimg_default250x250-camera.png"
    },
    image: {
      type: String,
      default:
        "https://assets-edge.slickpic.com/img/common/profileimg_default250x250-camera.png"
    },
    gamepad: {
      type: String,
      default:
        "https://assets-edge.slickpic.com/img/common/profileimg_default250x250-camera.png"
    }
  },

  {
    timestamps: true
  }
);
const Platform = mongoose.model("Platform", platformSchema);
module.exports = Platform;
