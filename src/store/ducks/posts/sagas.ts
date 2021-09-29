import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api, { errorHandler } from "../../../services/api";
import { loadPostsFailure, loadPostsSuccess } from "./actions";

export function* loadPosts(): any {
  try {
    const response: AxiosResponse = yield call(api.get, "posts");
    yield put(loadPostsSuccess(response.data));
  } catch (err: any) {
    yield put(loadPostsFailure(errorHandler(err)));
  }
}
