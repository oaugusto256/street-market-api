import { ImageURLs } from "./image-urls.interface";
import { Address } from "./address.interface";
import { WorkingDaysAndHours } from "./working-days-and-hours.interface";
import { StallService } from "./stall-service.interface";
import { CommonProduct } from "./common-product.interface";

export interface Stall {
  _id: string;
  marketerId: string;
  name: string;
  profileImageUrl?: string;
  imageUrls?: ImageURLs[];
  address: Address;
  locationType: string;
  stallType: string;
  workingDaysAndHours: WorkingDaysAndHours[];
  commonProductTypes: CommonProduct[];
  services: [StallService];
  isActive: boolean;
}
