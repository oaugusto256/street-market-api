import { IAddress } from "./address.interface";
import { IUserType } from "./user-type.interface";

export interface IUser {
  _id: string;
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
  userType: IUserType;
  address: IAddress;
  isActive: boolean;
}
