import { Metadata } from "./metadata";

export interface Order {
  orderId: number;
  customerId: string;
  employeeId: number;
  orderDate: string;
  requiredDate: string;
  shippedDate: string;
  shipVia: number;
  freight: number;
  shipName: string;
  shipAddress: string;
  shipCity: string;
  shipRegion: string | null;
  shipPostalCode: string;
  shipCountry: string;
}

export interface OrdersResponse {
  data: Order[];
  metadata: Metadata;
}
