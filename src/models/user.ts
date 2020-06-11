import mongoose from "mongoose";
import { Address } from "../types/address.interface";
import { UserType } from "../types/user-type.interface";

const Schema = mongoose.Schema;

export type UserDocument = mongoose.Document & {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordResetToken: string;
  passwordResetExpires: Date;
  whatsapp: string;
  gender: string;
  pictureUrl: string;
  birthDate: Date;
  userType: UserType;
  address: Address;
};

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  passwordResetToken: String,
  passwordResetExpires: Date,
  whatsapp: String,
  gender: String,
  pictureUrl: String,
  birthDate: Date,
  userType: { type: String, required: true },
  address: {
    street: String,
    neighborhood: String,
    number: String,
    complement: String,
    state: String,
    country: String,
    zipcode: String,
  },
});

export const User = mongoose.model<UserDocument>("User", userSchema);
