import React from "react";
import { useReducer, useEffect } from "react";
import reducer from "./reducer";
import Length from "./Length";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import timesupSound from "/public/timesupSound.mp3";

export const initialState = {
  displayTime: 25 * 60,
  breakTime: 5 * 60,
  codingTime: 25 * 60,
  isTimerOn: false,
  isCoding: true,
};

const testingState = {
  displayTime: 3,
  breakTime: 3,
  codingTime: 3,
  isTimerOn: false,
  isCoding: true,
};

const testingMode = false;

const App = () => {
  const [state, dispatch] = useReducer(
    reducer,
    testingMode ? testingState : initialState
  );

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return `${minutes < 10 ? "0" + minutes : minutes} : ${
      seconds < 10 ? "0" + seconds : seconds.toFixed(0)
    }`;
  };

  const handleTimeChange = (timeDelta, type) => {
    if (type === "break") {
      if (state.breakTime <= 60 && timeDelta < 0) return;
      dispatch({
        type: "set_break_time",
        payload: state.breakTime + timeDelta,
      });
    }
    if (type === "coding") {
      if (state.codingTime <= 60 && timeDelta < 0) return;
      dispatch({
        type: "set_coding_time",
        payload: state.codingTime + timeDelta,
      });
    }
  };
  useEffect(() => {
    dispatch({
      type: "set_display_time",
      payload: state.isCoding ? state.codingTime : state.breakTime,
    });
  }, [state.isCoding, state.breakTime, state.codingTime]);

  useEffect(() => {
    let intervalId;

    if (state.isTimerOn) {
      intervalId = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [state.isTimerOn]);

  useEffect(() => {
    const sound = new Audio(timesupSound);
    if (state.displayTime === 0) {
      sound.play();
    }
  }, [state.displayTime]);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="relative group">
        <div className="absolute transition duration-1000 rounded-lg opacity-75 animate-tilt group-hover:duration-200 -inset-1 bg-gradient-to-t from-red-600 to-green-700 blur-lg group-hover:opacity-100"></div>
        <div className="relative grid grid-cols-1 space-y-5 bg-black rounded-lg opacity-70 p-7 place-items-center place-content-center ">
          <h1 className="text-3xl">Pomodoro Timer</h1>
          <h3 className="text-3xl">{state.isCoding ? "Coding" : "Break"}</h3>
          <h2 className="text-5xl">{formatTime(state.displayTime)}</h2>
          <div>
            <Length
              title={"Break Length"}
              type={"break"}
              id="break-label"
              formatTime={formatTime}
              handleTimeChange={handleTimeChange}
              time={state.breakTime}
              isCoding={state.isCoding}
            />
            <Length
              title={"Coding Length"}
              type={"coding"}
              id="coding-label"
              formatTime={formatTime}
              handleTimeChange={handleTimeChange}
              time={state.codingTime}
              isCoding={state.isCoding}
            />
          </div>
          <div className="flex gap-5 text-5xl">
            <button onClick={() => dispatch({ type: "toggle_timer" })}>
              {state.isTimerOn ? (
                <span role="icon" aria-label="pause">
                  <BsFillPauseFill />
                </span>
              ) : (
                <span role="icon" aria-label="start">
                  <BsFillPlayFill />
                </span>
              )}
            </button>

            <button onClick={() => dispatch({ type: "reset_timer" })}>
              <span role="icon" aria-label="reset">
                <GrPowerReset />
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
