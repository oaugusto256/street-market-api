import { Address } from "./address.interface";

export interface User {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  pictureUrl: string;
  address: Address;
  birthDate: Date;
  userType: string;
  password: string;
  resetToken: string;
  resetTokenExpiration: string;
}
