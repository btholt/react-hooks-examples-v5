import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './routes/Home';
import UseRef from './routes/UseRef';
import UseCallback from './routes/UseCallback';
import UseMemo from './routes/UseMemo';
import UseReducer from './routes/UseReducer';
import UseLayoutEffect from './routes/UseLayoutEffect';
import UseId from './routes/UseId';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/useId" element={<UseId />} />
      </Routes>
    </div>
  );
}

export default App;
