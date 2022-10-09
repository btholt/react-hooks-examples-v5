import { useEffect, useState, useMemo } from 'react';
import expensiveMathOperation from './expensiveMathOperation';

export default function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const value = useMemo(() => expensiveMathOperation(35));

  useEffect(() => {
    setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000);
  });

  return (
    <div>
      <h1>Current Time: {time}</h1>
      <h2>Result of an expensive math computation: {value}</h2>
    </div>
  );
}
