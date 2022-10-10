import { useEffect, useState, useMemo } from 'react';
import expensiveMathOperation from './expensiveMathOperation';

export default function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(35);
  const value = useMemo(() => expensiveMathOperation(count), [count]);

  useEffect(() => {
    setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000);
  });

  return (
    <div>
      <h1>Current Time: {time}</h1>
      <h2>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </h2>
      <h2>Result of an expensive math computation: {value}</h2>
    </div>
  );
}
