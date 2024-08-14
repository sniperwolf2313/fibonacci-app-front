import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './clock.css';

const Clock = () => {
  const [time, setTime] = useState(moment().format('HH:mm:ss'));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(moment().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock-container">
      <h2 className="clock-heading">Hora Actual:</h2>
      <h1 className="clock-time">{time}</h1>
    </div>
  );
};

export default Clock;
