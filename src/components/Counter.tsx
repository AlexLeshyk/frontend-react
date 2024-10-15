import { useState } from "react";
import classes from "./Counter.module.css";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment} className={classes.btn}>
        increment
      </button>
    </div>
  );
};
