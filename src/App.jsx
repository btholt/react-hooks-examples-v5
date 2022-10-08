import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './routes/Home';
import UseRef from './routes/UseRef';
import UseCallback from './routes/UseCallback';
import UseMemo from './routes/UseMemo';
import UseReducer from './routes/UseReducer';
import UseLayoutEffect from './routes/UseLayoutEffect';
import UseId from './routes/UseId';
import Others from './routes/Others';
import './App.css';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log('location', pathname);

  return (
    <div className="App">
      <nav>
        <h1>Intermediate React v5</h1>
        <select
          value={pathname}
          onChange={(e) => {
            navigate(e.target.value);
          }}
        >
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
    </div>
  );
}

export default App;
