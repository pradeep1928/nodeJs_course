const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive number.");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('password cannot contain word "password"');
      }
    },
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});

// Generating userAuthToken 
userSchema.methods.generateAuthToken = async function() {
  const user = this
  const token = jwt.sign({_id: user._id.toString()}, "thisisnodejscourse")

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

// creating creadentials for login 
userSchema.statics.findByCreadentials = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error("user not found, unable to login.")
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    console.log("unable to login")
    throw new Error("Unable to login.")
  }

  return user
}



// hashing the password before saving it 
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
