const mongoose = require('mongoose');
const EMAIL_PATTERN= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
​
const userSchema = new mongoose.Schema(
  {
    usertype: {
      type: String, enum: ["user", "admin"]
    },
    username: {
      type: String,
      required: 'Name is required',
    },
    email: {
      type: String,
      trim: true,
      match: [
        EMAIL_PATTERN,
        'Please fill a valid email address',
      ],
      sparse: true,
      unique: false,
      default: null,
      trim: true,
      lowecase: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      match: [PASSWORD_PATTERN, 'Invalid password pattern'],
    },
    gamesOwned:[{ type : Schema.ObjectId, ref: 'Game' }],
    platformsOwned:[{type: Schema.ObjectId, ref: 'Platform'}],
    social: {
      steam: String,
    }
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
  },
);
​
​
const User = mongoose.model('User', userSchema);
module.exports = User;