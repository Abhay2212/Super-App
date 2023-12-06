import React, { useEffect } from "react";
import style from "./Watch.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const WatchLeft = ({
  hours,
  minutes,
  seconds,
  startTimer,
  setStartTimer,
  displayedTime,
  setDisplayedTime,
  totalSeconds,
  formatTime,
  handleResetTimer,
}) => {
  useEffect(() => {
    if (!startTimer) {
      setDisplayedTime("00:00:00");
    }
  }, [startTimer]);

  return (
    <div className={style.CountdownCircleTimerContainer}>
      <div className={style.CountdownCircleTimer}>
        <CountdownCircleTimer
          isPlaying={startTimer}
          duration={totalSeconds}
          onComplete={handleResetTimer}
          colors={["#FF6A6A"]}
          size={130}
          strokeWidth={6}
          strokeLinecap={"round"}
          trailColor={"#181D37"}
          isSmoothColorTransition={true}
          rotation={"counterclockwise"}
        >
          {({ remainingTime }) => {
           setDisplayedTime(formatTime(remainingTime));

            return (
              <div className={style.timerContainer}>
                <span className={style.timer}>{displayedTime}</span>
              </div>
            );
          }}
        </CountdownCircleTimer> 
      </div>
    </div>
  );
};

export default WatchLeft;
