import { ResponseError } from "../../../services/api";

export enum TodosTypes {
  "LOAD_REQUEST" = "@todos/LOAD_REQUEST",
  "LOAD_SUCCESS" = "@todos/LOAD_SUCCESS",
  "LOAD_FAILURE" = "@todos/LOAD_FAILURE",
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  loading: boolean;
  data: Todo[];
  error?: ResponseError;
}
