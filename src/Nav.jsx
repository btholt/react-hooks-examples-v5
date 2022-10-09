import { useLocation, useNavigate } from 'react-router-dom';

export default function () {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <nav>
      <h1>Intermediate React v5</h1>
      <select
        value={pathname}
        onChange={(e) => {
          navigate(e.target.value);
        }}
      >
        <option value="/">Home</option>
        <option value="/useRef">useRef</option>
        <option value="/useReducer">useReducer</option>
        <option value="/useMemo">useMemo</option>
        <option value="/useCallback">useCallback</option>
        <option value="/useLayoutEffect">useLayoutEffect</option>
        <option value="/useId">useId</option>
      </select>
    </nav>
  );
}
