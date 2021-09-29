import { Reducer } from "redux";
import { CommentsState, CommentsTypes } from "./types";

const INITIAL_STATE: CommentsState = {
  loading: false,
  data: [],
};

const reducer: Reducer<CommentsState> = (
  state = INITIAL_STATE,
  { payload, type }
) => {
  switch (type) {
    case CommentsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CommentsTypes.LOAD_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case CommentsTypes.LOAD_FAILURE:
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
