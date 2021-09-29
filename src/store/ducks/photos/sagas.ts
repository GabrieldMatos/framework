import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api, { errorHandler } from "../../../services/api";
import {
  loadPhotosFailure,
  loadPhotosRequest,
  loadPhotosSuccess,
} from "./actions";

export function* loadPhotos({
  payload,
}: ReturnType<typeof loadPhotosRequest>): any {
  try {
    const response: AxiosResponse = yield call(
      api.get,
      `albums/${payload.albumId}/photos`
    );
    yield put(loadPhotosSuccess(response.data));
  } catch (err: any) {
    yield put(loadPhotosFailure(errorHandler(err)));
  }
}
