import { Metadata } from "./metadata";

export interface Supplier {
  supplierId: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: string;
  city: string;
  region: string | null;
  postalCode: string;
  country: string;
  phone: string;
  fax: string | null;
  homePage: string | null;
}

export interface SupplierResponse {
  data: Supplier[];
  metadata: Metadata;
}
