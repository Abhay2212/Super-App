import React, { useState } from "react";
import style from "./Watch.module.css";
import WatchLeft from "./WatchLeft";
import WatchRight from "./WatchRight";

function Watch() {
  const MAX_HOURS = 24;
  const MAX_MINUTES = 59;
  const MAX_SECONDS = 59;

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
      )}:${String(seconds).padStart(2, "0")}`;
    };
    
    const [displayedTime, setDisplayedTime] = useState(formatTime(totalSeconds));

  const handleIncrement = (unit) => {
    if (!startTimer) {
      switch (unit) {
        case "hours":
          setHours((prevHours) => (prevHours + 1) % (MAX_HOURS + 1));
          break;
        case "minutes":
          setMinutes((prevMinutes) => (prevMinutes + 1) % (MAX_MINUTES + 1));
          break;
        case "seconds":
          setSeconds((prevSeconds) => (prevSeconds + 1) % (MAX_SECONDS + 1));
          break;
        default:
          break;
      }
    }
  };

  const handleDecrement = (unit) => {
    if (!startTimer) {
      switch (unit) {
        case "hours":
          setHours(
            (prevHours) => (prevHours - 1 + MAX_HOURS + 1) % (MAX_HOURS + 1)
          );
          break;
        case "minutes":
          setMinutes(
            (prevMinutes) =>
              (prevMinutes - 1 + MAX_MINUTES + 1) % (MAX_MINUTES + 1)
          );
          break;
        case "seconds":
          setSeconds(
            (prevSeconds) =>
              (prevSeconds - 1 + MAX_SECONDS + 1) % (MAX_SECONDS + 1)
          );
          break;
        default:
          break;
      }
    }
  };

  const handleStartStop = () => {
    setStartTimer(true);
    console.log(`starttime ${startTimer}`)
    console.log(displayedTime)
  };

  const handleResetTimer = () => {
    console.log(handleResetTimer)
    setStartTimer(false);
    setDisplayedTime("00:00:00");
  };

  return (
    <div className={style.watchContainer}>
      <WatchLeft
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        startTimer={startTimer}
        setStartTimer={setStartTimer}
        setDisplayedTime={setDisplayedTime}
        displayedTime={displayedTime}
        totalSeconds={totalSeconds}
        formatTime={formatTime}
        handleResetTimer={handleResetTimer}
      />
      <WatchRight
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleStartStop={handleStartStop}
        startTimer={startTimer}
        handleResetTimer={handleResetTimer}
      />
    </div>
  );
}

export default Watch;
