import { Schema, model } from "mongoose";

const domainSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    regNumber: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    domain: {
      type: String, // Since domain selection is now single
      required: true,
    },
  },
  { timestamps: true }
);

export const Domain = model("Domain", domainSchema);
