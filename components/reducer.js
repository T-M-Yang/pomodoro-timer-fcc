import { initialState } from "./App";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_break_time": {
      return { ...state, breakTime: action.payload };
    }
    case "set_coding_time": {
      return { ...state, codingTime: action.payload };
    }
    case "set_display_time": {
      return { ...state, displayTime: action.payload };
    }
    case "toggle_timer": {
      return { ...state, isTimerOn: !state.isTimerOn };
    }
    case "reset_timer": {
      return { ...initialState, isTimerOn: false };
    }
    case "tick":
      if (state.displayTime === 0) {
        return {
          ...state,
          displayTime: state.isCoding ? state.breakTime : state.codingTime,
          isCoding: !state.isCoding,
        };
      } else {
        return { ...state, displayTime: state.displayTime - 1 };
      }
    default:
      throw new Error("Unknown Action");
  }
};

export default reducer;
