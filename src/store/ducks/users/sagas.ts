import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api, { errorHandler } from "../../../services/api";
import { loadUsersFailure, loadUsersSuccess } from "./actions";

export function* loadUsers(): any {
  try {
    const response: AxiosResponse = yield call(api.get, "users");
    yield put(loadUsersSuccess(response.data));
  } catch (err: any) {
    yield put(loadUsersFailure(errorHandler(err)));
  }
}
