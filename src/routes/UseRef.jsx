import { memo } from 'react';

const UseRefMemo = memo(function UseRef() {
  return (
    <div className="use-ref page">
      <select>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="qwik">Qwik</option>
        <option value="solid">Solid</option>
        <option value="svelte">Svelte</option>
      </select>
    </div>
  );
});

export default UseRefMemo;
