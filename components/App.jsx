import React from "react";
import { useReducer, useEffect } from "react";
import reducer from "./reducer";
import Length from "./Length";

export const initialState = {
  displayTime: 25 * 60,
  breakTime: 5 * 60,
  codingTime: 25 * 60,
  isTimerOn: false,
  isCoding: true,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return `${minutes < 10 ? "0" + minutes : minutes} : ${
      seconds < 10 ? "0" + seconds : seconds.toFixed(0)
    }`;
  };

  const increBreakTime = () => {
    dispatch({ type: "increase_break_time" });
  };

  const decreBreakTime = () => {
    dispatch({ type: "decrease_break_time" });
  };
  const increCodingTime = () => {
    dispatch({ type: "increase_coding_time" });
  };

  const decreCodingTime = () => {
    dispatch({ type: "decrease_coding_time" });
  };

  const setDisplayTime = () => {
    dispatch({
      type: "set_display_time",
      payload: state.isCoding ? state.codingTime : state.breakTime,
    });
  };

  useEffect(() => {
    setDisplayTime();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="grid grid-cols-1 space-y-5 place-items-center place-content-center">
        <h1>Pomodoro Timer</h1>
        <h3>{state.isCoding ? "Coding" : "Break"}</h3>
        <h2>{formatTime(state.displayTime)}</h2>
        <div>
          <Length
            title={"Break Length"}
            type={"break"}
            id="break-label"
            formatTime={formatTime}
            time={state.breakTime}
            increBreakTime={increBreakTime}
            decreBreakTime={decreBreakTime}
            isCoding={state.isCoding}
          />
          <Length
            title={"Coding Length"}
            type={"coding"}
            id="coding-label"
            formatTime={formatTime}
            time={state.codingTime}
            increCodingTime={increCodingTime}
            decreCodingTime={decreCodingTime}
            isCoding={state.isCoding}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
