import { action } from "typesafe-actions";
import { ResponseError } from "../../../services/api";
import { Todo, TodosTypes } from "./types";

export const loadTodosRequest = (userId: number) =>
  action(TodosTypes.LOAD_REQUEST, { userId });
export const loadTodosSuccess = (data: Todo[]) =>
  action(TodosTypes.LOAD_SUCCESS, {
    data,
  });
export const loadTodosFailure = (error: ResponseError) =>
  action(TodosTypes.LOAD_FAILURE, { error });
