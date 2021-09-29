import { action } from "typesafe-actions";
import { ResponseError } from "../../../services/api";
import { CommentsTypes, Comment } from "./types";

export const loadCommentsRequest = (postId: number) =>
  action(CommentsTypes.LOAD_REQUEST, { postId });
export const loadCommentsSuccess = (data: Comment[]) =>
  action(CommentsTypes.LOAD_SUCCESS, {
    data,
  });
export const loadCommentsFailure = (error: ResponseError) =>
  action(CommentsTypes.LOAD_FAILURE, { error });
