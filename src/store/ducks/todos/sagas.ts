import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api, { errorHandler } from "../../../services/api";
import { loadTodosFailure, loadTodosSuccess } from "./actions";

export function* loadTodos(): any {
  try {
    const response: AxiosResponse = yield call(api.get, "todos");
    yield put(loadTodosSuccess(response.data));
  } catch (err: any) {
    yield put(loadTodosFailure(errorHandler(err)));
  }
}
