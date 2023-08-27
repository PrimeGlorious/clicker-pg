function Counter({value1, value2, value3, onSelectBtn, btn1Disabled, btn2Disabled, btn3Disabled}) {
  return (
    <div>
      <h1>
        {value1}
        <button onClick={onSelectBtn} data-value='1' disabled={btn1Disabled}><b>Select</b></button>
      </h1>
      <h1>
        {value2}
        <button onClick={onSelectBtn} data-value='2' disabled={btn2Disabled}><b>Select</b></button>
      </h1>
      <h1>
        {value3}
        <button onClick={onSelectBtn} data-value='3' disabled={btn3Disabled}><b>Select</b></button>
      </h1>
    </div>
  )
};

export { Counter };
