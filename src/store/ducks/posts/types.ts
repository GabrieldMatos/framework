import { ResponseError } from "../../../services/api";

export enum PostTypes {
  "LOAD_REQUEST" = "@posts/LOAD_REQUEST",
  "LOAD_SUCCESS" = "@posts/LOAD_SUCCESS",
  "LOAD_FAILURE" = "@posts/LOAD_FAILURE",
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  loading: boolean;
  data: Post[];
  error?: ResponseError;
}
