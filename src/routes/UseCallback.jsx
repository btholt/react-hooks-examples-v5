import { useEffect, useState, useMemo, useCallback } from 'react';
import UseRefComponent from './UseRef';

export default function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const aUsefulCallback = () => {};
  const memoizedCallback = useCallback(aUsefulCallback, []);

  useEffect(() => {
    setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000);
  });

  return (
    <div>
      <h1>Current Time: {time}</h1>
      <UseRefComponent cb={memoizedCallback} />
    </div>
  );
}
