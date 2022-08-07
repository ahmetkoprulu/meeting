import mongoose from "mongoose";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  salt: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;

  setPassword(password: string): void;
  validatePassword(password: string): boolean;
}

const user = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
    },
    salt: {
      type: String,
    },
    image: {
      type: String,
      index: false,
    },
  },
  { timestamps: true }
);

user.methods.setPassword = function (password: string): void {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.password = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

user.methods.validatePassword = function (password: string): boolean {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return this.password === hash;
};

user.methods.generateJWT = function (): string {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      exp: exp.getTime() / 1000,
    },
    process.env.JWT_SECRET as string
  );
};

user.methods.toAuthJSON = function (): object {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

export default mongoose.model<User & mongoose.Document>("Meetings", user);
