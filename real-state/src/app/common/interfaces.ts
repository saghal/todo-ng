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
  image: string | null;
}

export interface userStructure {
  id: number;
  username: string;
  password: string;
  email: string;
  admin: boolean;
}

export interface houseListStructure {
  registraionNumber: number;
  size: number;
  yearBuilt: number;
  updated: string;
}
