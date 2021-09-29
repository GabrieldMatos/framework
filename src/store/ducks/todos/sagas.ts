import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api, { errorHandler } from "../../../services/api";
import {
  loadTodosFailure,
  loadTodosRequest,
  loadTodosSuccess,
} from "./actions";

export function* loadTodos({
  payload,
}: ReturnType<typeof loadTodosRequest>): any {
  try {
    const response: AxiosResponse = yield call(
      api.get,
      `todos?userId=${payload.userId}`
    );
    yield put(loadTodosSuccess(response.data));
  } catch (err: any) {
    yield put(loadTodosFailure(errorHandler(err)));
  }
}
