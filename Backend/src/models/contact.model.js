

import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    contactName: {
      type: String,
      required: false,
    },
    contactEmail: {
      type: [String],
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
  }, { timestamps: true })

export const Contact = mongoose.model("Contact", contactSchema)


