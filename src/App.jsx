import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav>
        <h1>Intermediate React v5</h1>
        <select>
          <option value="/">Home</option>
          <option value="/useRef">useState</option>
          <option value="/useReducer">useReducer</option>
          <option value="/useMemo">useMemo</option>
          <option value="/useCallback">useCallback</option>
          <option value="/useLayoutEffect">useLayoutEffect</option>
          <option value="/useId">useId</option>
          <option value="/others">Others</option>
        </select>
      </nav>
    </div>
  );
}

export default App;
