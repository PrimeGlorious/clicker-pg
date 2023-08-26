import { Button, OptionsList } from './Options.styled';

function Options({increase, decrease, reset}) {
  return (
    <div>
      <OptionsList>
        <li><Button type="button" onClick={increase}>+</Button></li>
        <li><Button type="button" onClick={decrease}>-</Button></li>
        <li><Button type="button" onClick={reset}><b>Reset</b></Button></li>
      </OptionsList>
    </div>
  )
};

export { Options };
