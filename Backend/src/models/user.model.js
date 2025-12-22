import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contacts: [{
      type: mongoose.Types.ObjectId,
      ref: 'Contact'
    }]

  }, { timestamps: true })


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10)
  next()
})
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
  try {
    const accessToken = jwt.sign(
      {
        _id: this._id,
        password: this.password,
        email: this.email
      },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )
    return accessToken;
  } catch (error) {
    console.log(error)
    throw new Error("Error while generating accessToken");
  }
}

userSchema.methods.generateRefreshToken = function () {
  try {
    const refreshToken = jwt.sign(
      {
        _id: this._id
      },
      process.env.REFRESH_TOKEN_KEY,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    )
    return refreshToken
  } catch (error) {
    throw new Error("Error while generating refresh token")
  }
}

export const User = mongoose.model("User", userSchema)



