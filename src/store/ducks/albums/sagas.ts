import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api, { errorHandler } from "../../../services/api";
import { loadAlbumsFailure, loadAlbumsSuccess } from "./actions";


export function* loadAlbums(): any {
  try {
    const response: AxiosResponse = yield call(api.get, "albums");
    yield put(loadAlbumsSuccess(response.data));
  } catch (err: any) {
    yield put(loadAlbumsFailure(errorHandler(err)));
  }
}
