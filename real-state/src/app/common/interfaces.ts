export interface houseStructure {
  id: number;
  registrationNumber: number;
  style: string;
  size: number;
  yearBuilt: number;
  type: string;
  status: string;
  address: string;
  updated: string;
  editor: string;
}

export interface userStructure {
  id: number;
  username: string;
  password: string;
  email: string;
  access: string;
}
