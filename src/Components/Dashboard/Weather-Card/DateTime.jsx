import React, { useState, useEffect } from "react";
import style from './Weather.module.css'

function DateTime() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div className={style.timer}>
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
    </div>
  )
}

export default DateTime;