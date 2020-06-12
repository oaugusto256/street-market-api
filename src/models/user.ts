/**
 * Required External Modules
 */
import mongoose from "mongoose";

/**
 * Data Model Interfaces
 */
import { User as UserInterface } from "../types/user.interface";

const Schema = mongoose.Schema;

export type UserDocument = mongoose.Document & UserInterface;

const userSchema = new Schema(
  {
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
    isActive: Boolean,
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDocument>("User", userSchema);
