import { action } from "typesafe-actions";
import { ResponseError } from "../../../services/api";
import { User, UsersTypes } from "./types";

export const loadUsersRequest = () => action(UsersTypes.LOAD_REQUEST);
export const loadUsersSuccess = (data: User[]) =>
  action(UsersTypes.LOAD_SUCCESS, {
    data,
  });
export const loadUsersFailure = (error: ResponseError) =>
  action(UsersTypes.LOAD_FAILURE, { error });
