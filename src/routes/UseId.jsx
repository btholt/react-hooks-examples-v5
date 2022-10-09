import { useId } from 'react';

export default function Home() {
  const id = useId();

  return (
    <div>
      <h1>id: {id}</h1>
      <label htmlFor={id}>
        Click on this label and it'll highlight the input
      </label>
      <br />
      <input type="text" id={id} />
    </div>
  );
}
