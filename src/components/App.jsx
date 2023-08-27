import { useState, useEffect } from 'react';
import { Counter } from './Counter/Counter';
import { Options } from './Options/Options';
import { Container } from './App.styled';

export const App = () => {
  const [value1, setValue1] = useState(
    JSON.parse(window.localStorage.getItem('Value1')) ?? 0
  );
  const [value2, setValue2] = useState(
    JSON.parse(window.localStorage.getItem('Value2')) ?? 0
  );
  const [value3, setValue3] = useState(
    JSON.parse(window.localStorage.getItem('Value3')) ?? 0
  );
  const [btn1, setbtn1] = useState(false);
  const [btn2, setbtn2] = useState(false);
  const [btn3, setbtn3] = useState(false);

  useEffect(() => {
    JSON.stringify(window.localStorage.setItem('Value1', value1));
  }, [value1]);

  useEffect(() => {
    JSON.stringify(window.localStorage.setItem('Value2', value2));
  }, [value2]);

  useEffect(() => {
    JSON.stringify(window.localStorage.setItem('Value3', value3));
  }, [value3]);

  const onSelectBtnClick = e => {
    switch (e.currentTarget.dataset.value) {
      case '1':
        setbtn1(true);
        setbtn2(false);
        setbtn3(false);
        break;
      case '2':
        setbtn1(false);
        setbtn2(true);
        setbtn3(false);
        break;
      case '3':
        setbtn1(false);
        setbtn2(false);
        setbtn3(true);
        break;
      default:
        break;
    }
  };

  const increase = () => {
    if (btn1) {
      setValue1(s => s + 1);
    }

    if (btn2) {
      setValue2(s => s + 1);
    }

    if (btn3) {
      setValue3(s => s + 1);
    }

    return;
  };

  const decrease = () => {
    if (btn1) {
      setValue1(s => s - 1);
    }

    if (btn2) {
      setValue2(s => s - 1);
    }

    if (btn3) {
      setValue3(s => s - 1);
    }

    return;
  };

  const reset = () => {
    if (btn1) {
      setValue1(0);
      return;
    }

    if (btn2) {
      setValue2(0);
      return;
    }

    if (btn3) {
      setValue3(0);
      return;
    }
  };

  const resetAll = () => {
    setValue1(0);
    setValue2(0);
    setValue3(0);
  };

  const selectAll = () => {
    if (btn1 === false || btn2 === false || btn3 === false) {
      setbtn1(true);
      setbtn2(true);
      setbtn3(true);
      return;
    }
    setbtn1(false);
    setbtn2(false);
    setbtn3(false);
  };

  return (
    <Container>
      <Counter
        value1={value1}
        value2={value2}
        value3={value3}
        onSelectBtn={onSelectBtnClick}
        btn1Disabled={btn1}
        btn2Disabled={btn2}
        btn3Disabled={btn3}
      />
      <Options
        increase={increase}
        decrease={decrease}
        reset={reset}
        selectAll={selectAll}
        resetAll={resetAll}
      />
    </Container>
  );
};
