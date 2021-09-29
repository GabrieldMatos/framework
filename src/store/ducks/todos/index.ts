import { Reducer } from "redux";
import { TodosState, TodosTypes } from "./types";

const INITIAL_STATE: TodosState = {
  loading: false,
  data: [],
};

const reducer: Reducer<TodosState> = (
  state = INITIAL_STATE,
  { payload, type }
) => {
  switch (type) {
    case TodosTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TodosTypes.LOAD_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case TodosTypes.LOAD_FAILURE:
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
