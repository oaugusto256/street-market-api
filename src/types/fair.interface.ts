import { Address } from "./address.interface";

export interface Fair {
  _id: string;
  name: string;
  address: Address;
  fairType: string;
  stallMembers: string[];
}
