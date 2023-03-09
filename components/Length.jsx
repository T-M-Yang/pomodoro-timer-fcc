import React from "react";
import { AiOutlineMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Length = ({
  title,
  type,
  time,
  formatTime,
  increBreakTime,
  decreBreakTime,
  increCodingTime,
  decreCodingTime,
  isCoding,
}) => {
  return (
    <section className="grid gap-3 border grid-col-1 place-items-center">
      <h2>{title}</h2>
      <div className="flex gap-3">
        <button
          onClick={() => (isCoding ? increCodingTime() : increBreakTime())}
        >
          <span role="img" aria-label="increase time">
            <AiFillPlusCircle />
          </span>
        </button>
        <h2 className="">{formatTime(time)}</h2>
        <button
          onClick={() => (isCoding ? decreCodingTime() : decreBreakTime())}
        >
          <span role="img" aria-label="decrease time">
            <AiOutlineMinusCircle />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Length;
