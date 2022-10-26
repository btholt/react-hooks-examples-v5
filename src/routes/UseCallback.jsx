import { useEffect, useState, useCallback } from 'react';
import UseRefComponent from './UseRef';

export default function Home() {
  const [left, setLeft] = useState(0);
  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  const aUsefulCallback = () => {};
  const memoizedCallback = useCallback(aUsefulCallback, []);

  return (
    <div>
      <div
        style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
        className="ball"
      ></div>
      <UseRefComponent cb={memoizedCallback} />
    </div>
  );
}
