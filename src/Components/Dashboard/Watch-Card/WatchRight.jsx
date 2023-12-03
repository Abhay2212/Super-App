import React from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import style from "./Watch.module.css";

function WatchRight({
  hours,
  minutes,
  seconds,
  handleIncrement,
  handleDecrement,
  handleStartStop,
  startTimer,
  handleResetTimer
}) {
  return (
    <div className={style.watchRight}>
      <div className={style.watchRightContainer}>
        <div className={style.hours}>
          <p>Hours</p>
          <GoTriangleUp className={style.GoTriangleDownUp} onClick={() => handleIncrement("hours")}
          />
          <h3>{hours}</h3>
          <GoTriangleDown className={style.GoTriangleDownUp} onClick={() => handleDecrement("hours")}/>
        </div>
        <div className={style.dot}>
          <span>:</span>
        </div>
        <div className={style.hours}>
          <p>Minutes</p>
          <GoTriangleUp className={style.GoTriangleDownUp} onClick={() => handleIncrement("minutes")}/>
          <h3>{minutes}</h3>
          <GoTriangleDown className={style.GoTriangleDownUp} onClick={() => handleDecrement("minutes")}/>
        </div>
        <div className={style.dot}>
          <span>:</span>
        </div>
        <div className={style.hours}>
          <p>Seconds</p>
          <GoTriangleUp className={style.GoTriangleDownUp} onClick={() => handleIncrement("seconds")}/>
          <h3>{seconds}</h3>
          <GoTriangleDown className={style.GoTriangleDownUp} onClick={() => handleDecrement("seconds")}/>
        </div>
      </div>
      <div className={style.watchRightButton}>
      <button onClick={startTimer ? handleResetTimer : handleStartStop}>
          {startTimer ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default WatchRight;
