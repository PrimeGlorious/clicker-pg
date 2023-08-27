import styled from 'styled-components';

export const OptionsList = styled.ul`
  display: flex;
  gap: 30px;
  flex-direction: column;
`

export const ItemWrap = styled.li`
  display: flex;
  gap: 50px;
`

export const Button = styled.button`
  appearance: none;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  height: 50px;
  width: 200px;
  outline: none;

  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  touch-action: manipulation;
  will-change: transform;

  &:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);

  &:active {
  box-shadow: none;
  transform: translateY(0);
  background-color: transparent;
  color: #1A1A1A;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(0, 0, 0, 0.50);
  }
}
}
`
