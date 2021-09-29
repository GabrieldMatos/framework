import { action } from "typesafe-actions";
import { ResponseError } from "../../../services/api";
import { PhotosTypes, Photo } from "./types";

export const loadPhotosRequest = (albumId: number) =>
  action(PhotosTypes.LOAD_REQUEST, { albumId });
export const loadPhotosSuccess = (data: Photo[]) =>
  action(PhotosTypes.LOAD_SUCCESS, {
    data,
  });
export const loadPhotosFailure = (error: ResponseError) =>
  action(PhotosTypes.LOAD_FAILURE, { error });
