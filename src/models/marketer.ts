/**
 * Required External Modules
 */
import mongoose from "mongoose";

/**
 * Data Model Interfaces
 */
import { Marketer as MarketerInterface } from "../types/marketer.interface";

const Schema = mongoose.Schema;

export type MarketerDocument = mongoose.Document & MarketerInterface;

const marketerSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    schooling: String,
    occupation: String,
    stalls: [
      {
        stallId: {
          type: Schema.Types.ObjectId,
          ref: "Stall",
        },
      },
    ],
  },
  { timestamps: true }
);

export const Marketer = mongoose.model<MarketerDocument>(
  "Marketer",
  marketerSchema
);
