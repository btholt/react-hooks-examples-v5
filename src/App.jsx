import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const location = useLocation();

  console.log('location', location);

  return (
    <BrowserRouter>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/useId" element={<UseId />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
