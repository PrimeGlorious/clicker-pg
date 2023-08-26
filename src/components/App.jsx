import { useState, useEffect } from 'react';
import { Counter } from './Counter/Counter';
import { Options } from './Options/Options';

export const App = () => {
  const [value, setValue] = useState(JSON.parse(window.localStorage.getItem('Value')) ?? 0);

  useEffect(() => {
    JSON.stringify(window.localStorage.setItem('Value', value));
  }, [value]);

  const increase = () => {
    setValue((prevState) => prevState + 1)
  }

  const decrease = () => {
    setValue((prevState) => prevState - 1)
  }

  const reset = () => {
    setValue(0)
  }

  return (
    <div>
      <Counter value={value} />
      <Options increase={increase} decrease={decrease} reset={reset} />
    </div>
  );
};
