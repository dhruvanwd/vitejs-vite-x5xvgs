// src/Counter.tsx
import React from "react";
import { useGlobalState, counterActions } from "./counter-state-manager";

interface CounterProps {
  index: number;
}

const Counter: React.FC<CounterProps> = ({ index }) => {
  const { counters } = useGlobalState("counters");

  return (
    <div className="counter">
      <p>Counter {index + 1}: {counters[index]}</p>
      <button onClick={() => counterActions.increment(index)}>Increment</button>
      <button onClick={() => counterActions.decrement(index)}>Decrement</button>
    </div>
  );
};

export default Counter;
