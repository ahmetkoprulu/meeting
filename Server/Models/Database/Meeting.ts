import mongoose from "mongoose";

export interface Meeting {
  _id: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

const meeting = new mongoose.Schema(
  {
    createdBy: {
      type: String,
      index: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Meeting & mongoose.Document>("Meetings", meeting);
