import mongoose from "mongoose";

export interface Meeting {
  _id: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

const meeting = new mongoose.Schema(
  {
    url: {
      type: String,
      index: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Meeting & mongoose.Document>("Meetings", meeting);
