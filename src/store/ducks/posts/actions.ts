import { action } from "typesafe-actions";
import { ResponseError } from "../../../services/api";
import { Post, PostTypes } from "./types";

export const loadPostsRequest = () => action(PostTypes.LOAD_REQUEST);
export const loadPostsSuccess = (data: Post[]) =>
  action(PostTypes.LOAD_SUCCESS, {
    data,
  });
export const loadPostsFailure = (error: ResponseError) =>
  action(PostTypes.LOAD_FAILURE, { error });
