import '../style.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function CalcBtns() {
  const [calculatorData, setInCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const myInputValue = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setInCalculatorData(newData);
  };

  const inputValue = calculatorData.next || calculatorData.total || '0';
  return (
    <div className="calc__btn">
      <div className="output">
        <div className="current__num">
          {inputValue}
        </div>
      </div>
      <button type="button" onClick={() => myInputValue('AC')} value="AC">AC</button>
      <button type="button" onClick={() => myInputValue('+/-')} value="+/-">+/-</button>
      <button type="button" onClick={() => myInputValue('%')} value="%">%</button>
      <button type="button" className="ops__btn" onClick={() => myInputValue('÷')} value="÷">
        ÷
      </button>
      <button type="button" onClick={() => myInputValue('7')} value="7">7</button>
      <button type="button" onClick={() => myInputValue('8')} value="8">8</button>
      <button type="button" onClick={() => myInputValue('9')} value="9">9</button>
      <button type="button" className="ops__btn" onClick={() => myInputValue('x')} value="x">
        x
      </button>
      <button type="button" onClick={() => myInputValue('4')} value="4">4</button>
      <button type="button" onClick={() => myInputValue('5')} value="5">5</button>
      <button type="button" onClick={() => myInputValue('6')} value="6">6</button>
      <button type="button" className="ops__btn" onClick={() => myInputValue('-')} value="-">
        -
      </button>
      <button type="button" onClick={() => myInputValue('1')} value="1">1</button>
      <button type="button" onClick={() => myInputValue('2')} value="2">2</button>
      <button type="button" onClick={() => myInputValue('3')} value="3">3</button>
      <button type="button" className="ops__btn" onClick={() => myInputValue('+')} value="+">
        +
      </button>
      <button type="button" className="span__two" onClick={() => myInputValue('0')} value="0">
        0
      </button>
      <button type="button" onClick={() => myInputValue('.')} value=".">.</button>
      <button type="button" className="ops__btn" onClick={() => myInputValue('=')} value="=">
        =
      </button>
    </div>
  );
}

export default CalcBtns;
