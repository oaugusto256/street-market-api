/**
 * Required External Modules
 */
import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * Data Model Interfaces
 */
import { IStall } from "../types/stall.interface";

export type StallDocument = mongoose.Document & IStall;

const stallSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    marketerId: {
      type: Schema.Types.ObjectId,
      ref: "Marketer",
      required: true,
    },
    profileImageUrl: String,
    imageUrls: [String],
    address: {
      street: { type: String, required: true },
      neighborhood: { type: String, required: true },
      number: String,
      complement: String,
      state: { type: String, required: true },
      country: { type: String, required: true },
      zipcode: { type: String, required: true },
      location: [Number, Number],
    },
    locationType: String,
    stallType: String,
    workingDaysAndHours: [
      {
        weekDay: String,
        openingTime: Date,
        closingTime: Date,
        isActive: Boolean,
      },
    ],
    commonProductTypes: Array,
    services: Array,
    isActive: Boolean,
  },
  { timestamps: true }
);

export const Stall = mongoose.model<StallDocument>("Stall", stallSchema);
