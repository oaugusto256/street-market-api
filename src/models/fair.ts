/**
 * Required External Modules
 */
import mongoose from "mongoose";
import { Fair as FairInterface } from "../types/fair.interface";

const Schema = mongoose.Schema;

/**
 * Data Model Interfaces
 */
export type FairDocument = mongoose.Document & FairInterface;

const fairSchema = new Schema(
  {
    name: String,
    address: {
      street: String,
      neighborhood: String,
      number: String,
      complement: String,
      state: String,
      country: String,
      zipcode: String,
      location: [Number, Number],
    },
    fairType: String,
    stallMembers: [
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

export const Fair = mongoose.model<FairDocument>("Fair", fairSchema);
