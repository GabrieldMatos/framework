import { action } from "typesafe-actions";
import { ResponseError } from "../../../services/api";
import { Album, AlbumsTypes } from "./types";

export const loadAlbumsRequest = () => action(AlbumsTypes.LOAD_REQUEST);
export const loadAlbumsSuccess = (data: Album[]) =>
  action(AlbumsTypes.LOAD_SUCCESS, {
    data,
  });
export const loadAlbumsFailure = (error: ResponseError) =>
  action(AlbumsTypes.LOAD_FAILURE, { error });
