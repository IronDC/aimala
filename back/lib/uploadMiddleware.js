const multer = require("multer");
const cloudinaryStorage = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary");
const _ = require("lodash");

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "aimala",
  allowedFormats: ["jpg", "png"],
  filename: function (req, file, cb) {
    const userID = _.get(req, "user.id");
    const userFile = userID ? `aimala${userID}` : file;
    cb(undefined, userFile);
    console.log("the middleware cloudinary");
  },
});

module.exports = uploadCloudinaryAvatar = multer({ storage });
module.exports = upload = multer({ dest: "uploads/" });