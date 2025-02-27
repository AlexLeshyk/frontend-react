import { useState } from 'react';

export const useTimer = () => {
  const [timer, setTimer] = useState<number>(0);

  const onStartTimer = () => {
    const start = new Date().getTime();
    setInterval(() => {
      setTimer(Math.trunc((new Date().getTime() - start) / 1000));
    }, 1000);
  };

  return { timer, onStartTimer };
};
