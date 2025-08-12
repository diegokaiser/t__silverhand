import { Metadata } from "./metadata";

export interface Employee {
  employeeId: number,
  lastName: string,
  firstName: string,
  title: string,
  titleOfCourtesy: string,
  birthDate: string,
  hireDate: string,
  address: string,
  city: string,
  region: string,
  postalCode: string,
  country: string,
  homePhone: string,
  extension: string,
  photo: string,
  notes: string,
  reportsTo: number,
  photoPath: string,
}

export interface ExployeeResponse {
  data: Employee[];
  metadata: Metadata;
}
