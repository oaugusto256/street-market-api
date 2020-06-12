import mongoose from "mongoose";
import { StreetMarket as StreetMarketInterface } from "../types/street-market.interface";

const Schema = mongoose.Schema;

export type StreetMarketDocument = mongoose.Document & StreetMarketInterface;

const streetMarketSchema = new Schema({
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

export const StreetMarket = mongoose.model<StreetMarketDocument>(
  "StreetMarket",
  streetMarketSchema
);
