import { action } from "typesafe-actions";
import { ResponseError } from "../../../services/api";
import { Todo, TodosTypes } from "./types";

export const loadTodosRequest = () => action(TodosTypes.LOAD_REQUEST);
export const loadTodosSuccess = (data: Todo[]) =>
  action(TodosTypes.LOAD_SUCCESS, {
    data,
  });
export const loadTodosFailure = (error: ResponseError) =>
  action(TodosTypes.LOAD_FAILURE, { error });
