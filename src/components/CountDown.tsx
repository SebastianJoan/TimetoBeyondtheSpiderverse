'use client'

import { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = new Date('March 29, 2024 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen z-10 absolute p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white bg-black p-2 rounded-md">Spider-Man: Beyond the Spider-Verse</h1>
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-center">
          <div className="bg-black p-4 rounded-lg mx-1">
            <span className="text-2xl font-bold">{days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="bg-black p-4 rounded-lg mx-1">
            <span className="text-2xl font-bold">{hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="bg-black p-4 rounded-lg mx-1">
            <span className="text-2xl font-bold">{minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="bg-black p-4 rounded-lg mx-1">
            <span className="text-2xl font-bold">{seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;