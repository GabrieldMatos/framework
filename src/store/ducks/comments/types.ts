import { ResponseError } from "../../../services/api";

export enum CommentsTypes {
  "LOAD_REQUEST" = "@comments/LOAD_REQUEST",
  "LOAD_SUCCESS" = "@comments/LOAD_SUCCESS",
  "LOAD_FAILURE" = "@comments/LOAD_FAILURE",
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentsState {
  loading: boolean;
  data: Comment[];
  error?: ResponseError;
}
