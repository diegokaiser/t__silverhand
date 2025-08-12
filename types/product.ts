import { Metadata } from "./metadata";

export interface Product {
  productId: number;
  productName: string;
  supplierId: number;
  categoryId: number;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  reorderLevel: number;
  discontinued: string;
}

export interface ProductResponse {
  data: Product[];
  metadata: Metadata;
}
