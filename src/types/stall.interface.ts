import { IImageURLs } from "./image-urls.interface";
import { IAddress } from "./address.interface";
import { IWorkingDaysAndHours } from "./working-days-and-hours.interface";
import { IStallService } from "./stall-service.interface";
import { ICommonProduct } from "./common-product.interface";

export interface IStall {
  _id: string;
  marketerId: string;
  name: string;
  description: string;
  profileImageUrl?: string;
  imageUrls?: IImageURLs[];
  address: IAddress;
  locationType: string;
  stallType: string;
  workingDaysAndHours: IWorkingDaysAndHours[];
  commonProductTypes: ICommonProduct[];
  services: [IStallService];
  isActive: boolean;
}
