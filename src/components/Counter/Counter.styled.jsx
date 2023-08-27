import styled from 'styled-components';

export const CounterWrap = styled.div`
  /* border: 1px dotted #000000; */
`;

export const CounterList = styled.ul`
  display: flex;
  gap: 100px;
`;

export const CounterItem = styled.li`
  position: relative;
  width: 300px;
  height: 500px;
  border: 1px solid black;
  border-radius: 5%;
  background: linear-gradient(to right, #434343 0%, black 100%);
`;

export const LeftCounterTitleWrap = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 50px;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border: 1px solid #000000;
  background-color: #ffffff;
`;

export const CenterCounterTitleWrap = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 50px;
  border: 1px solid #000000;
  background-color: #ffffff;
`;

export const RightCounterTitleWrap = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 50px;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1px solid #000000;
  background-color: #ffffff;
`;

export const CounterBtn = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  appearance: none;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  height: 50px;
  width: 200px;
  outline: none;

  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  touch-action: manipulation;
  will-change: transform;

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    /* transform: translateY(-2px); */
  }
  &:active {
    box-shadow: none;
    /* transform: translateY(0); */
    background-color: transparent;
    color: #1a1a1a;
  }
  &:disabled {
    background-color: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;
