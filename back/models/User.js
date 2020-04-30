const mongoose = require("mongoose");
const { hashPassword } = require("../lib/hashing");
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_PATTERN = /^[a-zA-Z]\w{3,14}$/;
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    usertype: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    username: {
      type: String,
      required: "Name is required",
    },
    email: {
      type: String,
      trim: true,
      match: [EMAIL_PATTERN, "Please fill a valid email address"],
      unique: false,
      default: null,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [PASSWORD_PATTERN, "Invalid password pattern"],
    },
    gamesOwned: {
      type: [{ type: Schema.Types.ObjectId, ref: "Game" }],
      default: [],
    },
    platformsOwned: {
      type: [{ type: Schema.Types.ObjectId, ref: "Platform" }],
      default: [],
    },
    steamid: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  user.password = await hashPassword(user.password);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
