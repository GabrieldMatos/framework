import { Reducer } from "redux";
import { PostState, PostTypes } from "./types";

const INITIAL_STATE: PostState = {
  loading: false,
  data: [],
};

const reducer: Reducer<PostState> = (
  state = INITIAL_STATE,
  { payload, type }
) => {
  switch (type) {
    case PostTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PostTypes.LOAD_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case PostTypes.LOAD_FAILURE:
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
