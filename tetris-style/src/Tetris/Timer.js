import React, { useState, useEffect } from "react";

function Timer({ onTimeout }) {
  const [seconds, setSeconds] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        clearInterval(timer);
        onTimeout();
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, onTimeout]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="timer">
      {minutes}:
      {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    </div>
  );
}

export default Timer;
