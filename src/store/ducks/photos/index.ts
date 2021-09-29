import { Reducer } from "redux";
import { PhotosState, PhotosTypes } from "./types";

const INITIAL_STATE: PhotosState = {
  loading: false,
  data: [],
};

const reducer: Reducer<PhotosState> = (
  state = INITIAL_STATE,
  { payload, type }
) => {
  switch (type) {
    case PhotosTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PhotosTypes.LOAD_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case PhotosTypes.LOAD_FAILURE:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
