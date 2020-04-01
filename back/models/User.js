const mongoose=require('mongoose');
const EMAIL_PATTERN=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_PATTERN=/^[a-zA-Z]\w{3,14}$/;
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    usertype: {
      type: String, enum: ["user", "admin"],
      default: "user"
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
      unique: false,
      default: null,
      lowecase: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      match: [PASSWORD_PATTERN, 'Invalid password pattern'],
    },
    gamesOwned:[{type:Schema.Types.ObjectId, ref: 'Game' }],
    platformsOwned:[{type:Schema.Types.ObjectId, ref: 'Platform'}],
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
const User = mongoose.model('User', userSchema);
module.exports = User;