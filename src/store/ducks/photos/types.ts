import { ResponseError } from "../../../services/api";

export enum PhotosTypes {
  "LOAD_REQUEST" = "@photos/LOAD_REQUEST",
  "LOAD_SUCCESS" = "@photos/LOAD_SUCCESS",
  "LOAD_FAILURE" = "@photos/LOAD_FAILURE",
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotosState {
  loading: boolean;
  data: Photo[];
  error?: ResponseError;
}
