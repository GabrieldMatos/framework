import { Reducer } from "redux";
import { UsersState, UsersTypes } from "./types";

const INITIAL_STATE: UsersState = {
  loading: false,
  data: [],
};

const reducer: Reducer<UsersState> = (
  state = INITIAL_STATE,
  { payload, type }
) => {
  switch (type) {
    case UsersTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UsersTypes.LOAD_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case UsersTypes.LOAD_FAILURE:
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
