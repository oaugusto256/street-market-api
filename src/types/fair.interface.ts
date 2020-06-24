import { IAddress } from "./address.interface";

export interface IFair {
  _id: string;
  name: string;
  address: IAddress;
  fairType: string;
  stallMembers: string[];
}
