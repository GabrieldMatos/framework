import { ResponseError } from "../../../services/api";

export enum AlbumsTypes {
  "LOAD_REQUEST" = "@albums/LOAD_REQUEST",
  "LOAD_SUCCESS" = "@albums/LOAD_SUCCESS",
  "LOAD_FAILURE" = "@albums/LOAD_FAILURE",
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface AlbumsState {
  loading: boolean;
  data: Album[];
  error?: ResponseError;
}
