import React from "react";
import { AiOutlineMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Length = ({
  title,
  type,
  time,
  formatTime,
  isCoding,
  handleTimeChange,
}) => {
  return (
    <section className="grid grid-col-1 place-items-center">
      <h2>{title}</h2>
      <div className="flex gap-3 pb-3 text-3xl">
        <button onClick={() => handleTimeChange(60, type)}>
          <span role="img" aria-label="increase time">
            <AiFillPlusCircle />
          </span>
        </button>
        <h2 className="">{formatTime(time)}</h2>
        <button onClick={() => handleTimeChange(-60, type)}>
          <span role="img" aria-label="decrease time">
            <AiOutlineMinusCircle />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Length;
