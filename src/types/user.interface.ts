import { Address } from "./address.interface";
import { UserType } from "./user-type.interface";

export interface User {
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
}
