import { ImageURLs } from "./image-urls.interface";
import { Address } from "./address.interface";
import { WorkingDaysAndHours } from "./working-days-and-hours.interface";
import { MarketService } from "./market-service.interface";
import { CommonProduct } from "./common-product.interface";

export interface FairStand {
  id: string;
  userId: string;
  name: string;
  profileImageUrl?: string;
  imageUrls?: ImageURLs[];
  address: Address;
  locationType: string;
  marketType: string;
  workingDaysAndHours: WorkingDaysAndHours[];
  commonProductTypes: CommonProduct[];
  services: [MarketService];
  isActive: boolean;
}
