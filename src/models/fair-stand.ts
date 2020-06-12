import mongoose from "mongoose";
import { FairStand as FairStandInterface } from "../types/fair-stand";

const Schema = mongoose.Schema;

export type StreetMarketDocument = mongoose.Document & FairStandInterface;

const fairStandSchema = new Schema({
  name: { type: String, required: true },
  profileImageUrl: String,
  imageUrls: Array,
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
  locationType: String,
  marketType: String,
  workingDaysAndHours: Array,
  commonProductTypes: Array,
  services: Array,
  isActive: Boolean,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const FairStand = mongoose.model<StreetMarketDocument>(
  "FairStand",
  fairStandSchema
);
