import { useEffect, useState } from "react";
import propTypes from "prop-types";


const DiskonTimer = ({className}) => {
  const initialTime = 6 * 60 * 60;
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          return initialTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col ">
      <div className={`text-2xl font-bold bg-red-500 px-4 py-1 rounded-lg shadow-lg text-white ${className}`}>
        {formatTime(time)}
      </div>
    </div>
  );
};

DiskonTimer.propTypes = {
  className: propTypes.string,
};

export default DiskonTimer;
