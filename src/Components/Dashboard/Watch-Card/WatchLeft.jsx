import React, { useState, useEffect } from "react";
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
  // const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  // console.log(totalSeconds);

  // const formatTime = (timeInSeconds) => {
  //   const hours = Math.floor(timeInSeconds / 3600);
  //   const minutes = Math.floor((timeInSeconds % 3600) / 60);
  //   const seconds = timeInSeconds % 60;
  //   return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  // };

  // const [rotationKey, setRotationKey] = useState(0);
  // const [displayedTime, setDisplayedTime] = useState(formatTime(totalSeconds));


  // const handleResetTimer = () => {
  //   setStartTimer(false);
  //   setDisplayedTime("00:00:00");
  // };
// console.log(displayedTime)
// console.log(rotationKey)
  useEffect(() => {
    if (!startTimer) {
      // setRotationKey((prevKey) => prevKey + 1); 
      setDisplayedTime("00:00:00");
    }
  }, [startTimer]);

  return (
    <div className={style.CountdownCircleTimerContainer}>
      <div className={style.CountdownCircleTimer}>
        <CountdownCircleTimer
          isPlaying={startTimer}
          // key={rotationKey}
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
            // const remainingHours = Math.floor(remainingTime / 3600);
            // const remainingMinutes = Math.floor((remainingTime % 3600) / 60);
            // const remainingSeconds = remainingTime % 60;
            // const currentTime = formatTime(remainingTime);

            // setDisplayedTime(currentTime);

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
