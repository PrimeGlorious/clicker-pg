import { CounterBtn } from './Counter.styled';
import {
  CounterWrap,
  CounterList,
  CounterItem,
  LeftCounterTitleWrap,
  CenterCounterTitleWrap,
  RightCounterTitleWrap,
} from './Counter.styled';

function Counter({
  value1,
  value2,
  value3,
  onSelectBtn,
  btn1Disabled,
  btn2Disabled,
  btn3Disabled,
}) {
  return (
    <CounterWrap>
      <CounterList>
        <CounterItem>
          <LeftCounterTitleWrap>
            <h1>{value1}</h1>
          </LeftCounterTitleWrap>
          <CounterBtn
            onClick={onSelectBtn}
            data-value="1"
            disabled={btn1Disabled}
          >
            <b>Select</b>
          </CounterBtn>
        </CounterItem>
        <CounterItem>
          <CenterCounterTitleWrap>
            <h1>{value2}</h1>
          </CenterCounterTitleWrap>
          <CounterBtn
            onClick={onSelectBtn}
            data-value="2"
            disabled={btn2Disabled}
          >
            <b>Select</b>
          </CounterBtn>
        </CounterItem>
        <CounterItem>
          <RightCounterTitleWrap>
            <h1>{value3}</h1>
          </RightCounterTitleWrap>
          <CounterBtn
            onClick={onSelectBtn}
            data-value="3"
            disabled={btn3Disabled}
          >
            <b>Select</b>
          </CounterBtn>
        </CounterItem>
      </CounterList>
    </CounterWrap>
  );
}

export { Counter };
