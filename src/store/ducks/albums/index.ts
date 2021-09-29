import { Reducer } from "redux";
import { AlbumsState, AlbumsTypes } from "./types";


const INITIAL_STATE: AlbumsState = {
  loading: false,
  data: [],
};

const reducer: Reducer<AlbumsState> = (
  state = INITIAL_STATE,
  { payload, type }
) => {
  switch (type) {
    case AlbumsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AlbumsTypes.LOAD_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case AlbumsTypes.LOAD_FAILURE:
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
