import { ResponseError } from "../../../services/api";

export enum UsersTypes {
  "LOAD_REQUEST" = "@users/LOAD_REQUEST",
  "LOAD_SUCCESS" = "@users/LOAD_SUCCESS",
  "LOAD_FAILURE" = "@users/LOAD_FAILURE",
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UsersState {
  loading: boolean;
  data: User[];
  error?: ResponseError;
}
