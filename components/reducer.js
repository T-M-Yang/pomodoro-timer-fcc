import { initialState } from "./App";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase_break_time": {
      return { ...state, breakTime: state.breakTime + 60 };
    }
    case "decrease_break_time": {
      return { ...state, breakTime: Math.max(60, state.breakTime - 60) };
    }
    case "increase_coding_time": {
      return { ...state, codingTime: state.codingTime + 60 };
    }
    case "decrease_coding_time": {
      return { ...state, codingTime: Math.max(60, state.codingTime - 60) };
    }
    case "set_display_time": {
      return { ...state, displayTime: action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
