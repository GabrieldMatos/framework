import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api, { errorHandler } from "../../../services/api";
import {
  loadCommentsRequest,
  loadCommentsSuccess,
  loadCommentsFailure,
} from "./actions";

export function* loadComments({
  payload,
}: ReturnType<typeof loadCommentsRequest>): any {
  try {
    const response: AxiosResponse = yield call(
      api.get,
      `posts/${payload.postId}/comments`
    );
    yield put(loadCommentsSuccess(response.data));
  } catch (err: any) {
    yield put(loadCommentsFailure(errorHandler(err)));
  }
}
