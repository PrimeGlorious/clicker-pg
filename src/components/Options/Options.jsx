import { Button, OptionsList, ItemWrap } from './Options.styled';

function Options({ increase, decrease, reset, selectAll, resetAll }) {
  return (
    <div>
      <OptionsList>
        <ItemWrap>
          <li>
            <Button type="button" onClick={selectAll}>
              <b>Select All / Unselect All</b>
            </Button>
          </li>
          <li>
            <Button type="button" onClick={resetAll}>
              <b>Reset All</b>
            </Button>
          </li>
        </ItemWrap>
        <ItemWrap>
          <Button type="button" onClick={increase}>
            +
          </Button>
          <Button type="button" onClick={decrease}>
            -
          </Button>
        </ItemWrap>
        <li>
          <Button type="button" onClick={reset}>
            <b>Reset</b>
          </Button>
        </li>
      </OptionsList>
    </div>
  );
}

export { Options };
