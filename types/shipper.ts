import { Metadata } from "./metadata";

export interface Shipper {
  shipperId: number;
  companyName: string;
  phone: string;
}

export interface ShipperResponse {
  data: Shipper[];
  metadata: Metadata;
}
