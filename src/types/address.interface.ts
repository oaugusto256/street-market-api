export interface Address {
  street: string;
  neighborhood: string;
  number: string;
  complement: string;
  state: string;
  country: string;
  zipcode: string;
  location?: [number, number];
}
