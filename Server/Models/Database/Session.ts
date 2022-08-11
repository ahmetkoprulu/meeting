import mongoose from "mongoose";

export interface MSession {
  _id: string;
  userId: string;
  expires: Date;
  isClosed: boolean;
  isPersistent: boolean;
  cookie: string;
  createdAt: Date;
  updatedAt: Date;

  isExpired(): boolean;
  setCookie(c: MCookie): void;
  getCookie(): MCookie;
}

interface ISessionMethods {
  isExpired(): boolean;
  setCookie(c: MCookie): void;
  getCookie(): MCookie;
}

export interface MCookie {
  sid: string;
  originalMaxAge: number;
  expires: Date;
  path: string;
  domain: string;
  secure: boolean;
  httpOnly: boolean;
  sameSite: string;
}

const session = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    isClosed: {
      type: Boolean,
      default: false,
    },
    isPersistent: {
      type: Boolean,
      default: false,
    },
    cookie: {
      type: String,
    },
  },
  { timestamps: true }
);

session.methods.isExpired = function (): boolean {
  return this.expires < new Date();
};

session.methods.setCookie = function (c: MCookie): void {
  this.cookie = JSON.stringify(c);
};

session.methods.getCookie = function (): MCookie {
  return JSON.parse(this.cookie);
};

export default mongoose.model<MSession & mongoose.Document>(
  "Sessions",
  session
);
